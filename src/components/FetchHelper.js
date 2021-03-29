import firebase from "firebase";
import Post from "./Feed/Post";
import User from "./Feed/User";
import Comment from "./Feed/Comment";
import Community from "./Communities/Community";

class FetchHelper {

    constructor() {
        this.id = null;
        this.posts = [];
        this.singlePost = null;
        this.communities = [];
        this.community = null;
    }

    fetchFeedPosts = async () => {
        var localPosts = [];
        var db = firebase.firestore();
        var querySnap = await db.collection("Posts")
            .orderBy("createTime", "desc").limit(15).get();
        querySnap.forEach((QueryDocumentSnapshot) => {
            var post = this.addPost(QueryDocumentSnapshot);
            localPosts.push(post);
        });
        this.posts = localPosts;
        await this.fetchUsersForPost();
        return this.posts;
    }

    fetchUsersForPost = async () => {
        var db = firebase.firestore();
        var promiseArray = [];
        this.posts.forEach((post => {
            if (post.originalPoster == "anonym") {
                post.user = new User();
                post.user.full_name = "anonym";
                post.user.userName = "Anonymer";
                post.user.userSurname = "User";
                post.user.profilePicture = null;
            } else {
                var promise = db.collection("Users").doc(post.originalPoster).get().then(
                    (DocumentSnapshot) => {
                        var user = new User();
                        user.full_name = DocumentSnapshot.get("full_name");
                        user.profilePicture = DocumentSnapshot.get("profilePictureURL");
                        user.userID = DocumentSnapshot.id;
                        user.userName = DocumentSnapshot.get("name");
                        user.userSurname = DocumentSnapshot.get("surname");
                        post.user = user;
                    }
                );
                promiseArray.push(promise);
            }
        }));
        await Promise.all(promiseArray);
        return;
    }


    fetchSinglePost = async (id, isTopicPost) => {
        this.singlePost = new Post();
        var db = firebase.firestore();
        var docSnap;
        if (isTopicPost == "null") {
            console.log("Fetch from Posts");
            console.log(isTopicPost);
            docSnap = await db.collection("Posts").doc(id).get();
        } else {
            console.log("Fetch from TopicPosts");
            console.log(isTopicPost);
            docSnap = await db.collection("TopicPosts").doc(id).get();
        }
        this.singlePost = this.addPost(docSnap);
        var userPromise = this.fetchUserForSinglePost();
        var commentPromise = this.fetchCommentsforSinglePost();
        await Promise.all([userPromise, commentPromise]);
        return this.singlePost;
    }

    fetchUserForSinglePost = async () => {
        var db = firebase.firestore();
        var docSnap = await db.collection("Users").doc(this.singlePost.originalPoster).get();
        var user = new User();
        user.full_name = docSnap.get("full_name");
        user.profilePicture = docSnap.get("profilePictureURL");
        user.userID = docSnap.id;
        user.userName = docSnap.get("name");
        user.userSurname = docSnap.get("surname");
        this.singlePost.user = user;
        return;
    }


    fetchCommentsforSinglePost = async () => {
        var db = firebase.firestore();
        var QueryDocumentSnapshot = await db.collection("Comments")
            .doc(this.singlePost.documentID).collection("threads").orderBy("sentAt", "desc").get();
        this.singlePost.comments = [];
        QueryDocumentSnapshot.forEach((DocumentSnapshot) => {
            var comment = new Comment();
            comment.body = DocumentSnapshot.get("body");
            comment.sentAt = DocumentSnapshot.get("sentAt");
            comment.userID = DocumentSnapshot.get("userID");
            comment.sentAtString = comment.convertTime();
            this.singlePost.comments.push(comment);
        });
        await this.fetchUserForComments();
        return;
    }

    fetchUserForComments = async () => {
        var db = firebase.firestore();
        var promiseArray = [];
        this.singlePost.comments.forEach((comment) => {
            var promise = db.collection("Users").doc(comment.userID).get().then((DocumentSnapshot) => {
                var user = new User();
                user.full_name = DocumentSnapshot.get("full_name");
                user.profilePicture = DocumentSnapshot.get("profilePictureURL");
                user.userID = DocumentSnapshot.id;
                user.userName = DocumentSnapshot.get("name");
                user.userSurname = DocumentSnapshot.get("surname");
                comment.user = user;
            });
            promiseArray.push(promise);
        });
        await Promise.all(promiseArray);
        return;
    }

    fetchCommunities = async () => {
        var db = firebase.firestore();
        var querySnap = await db.collection("Facts").orderBy("popularity", "desc").limit(15).get();
        querySnap.forEach((docSnap) => {
            var community = new Community();
            community.name = docSnap.get("name");
            community.imageURL = docSnap.get("imageURL");
            community.type = docSnap.get("type");
            community.description = docSnap.get("description");
            community.topicID = docSnap.id;
            this.communities.push(community);
        });
        return this.communities;
    }

    fetchSingleCommunity = async (id) => {
        var db = firebase.firestore();
        var docSnap = await db.collection("Facts").doc(id).get();
        this.community = new Community();
        this.community.name = docSnap.get("name");
        this.community.topicID = docSnap.id;
        this.community.imageURL = docSnap.get("imageURL");
        this.community.description = docSnap.get("description");
        await this.fetchPostIDsFromCommunity(this.community.topicID);
        await this.fetchPostsFromIDs(this.community.postIDs);
        await this.fetchUsersForCommunityPosts();
        return this.community;
    }

    fetchPostIDsFromCommunity = async (id) => {
        var db = firebase.firestore();
        var queryDocSnap = await db.collection("Facts")
            .doc(id).collection("posts").orderBy("createTime", "desc").limit(15).get();
        queryDocSnap.forEach((docSnap) => {
            this.community.postIDs.push({
                id: docSnap.id, type: docSnap.get("type")
            });
        });
        return;
    }

    fetchPostsFromIDs = async (postIDs) => {
        var promiseArray = [];
        var db = firebase.firestore();
        postIDs.forEach((idObj) => {
            var type = idObj.type;
            var id = idObj.id;
            var promise;
            if (type == "topicPost") {
                promise = db.collection("TopicPosts").doc(id).get().then((docSnap) => {
                    var post = this.addPost(docSnap);
                    post.isTopicPost = true;
                    this.community.posts.push(post);
                });
            } else {
                promise = db.collection("Posts").doc(id).get().then((docSnap) => {
                    this.community.posts.push(this.addPost(docSnap));
                });
            }
            promiseArray.push(promise);
        });
        await Promise.all(promiseArray);
        return;
    }

    fetchUsersForCommunityPosts = async () => {
        var db = firebase.firestore();
        var promiseArray = [];
        this.community.posts.forEach((post => {
            if (post.originalPoster == "anonym") {
                post.user = new User();
                post.user.full_name = "anonym";
                post.user.userName = "Anonymer";
                post.user.userSurname = "User";
                post.user.profilePicture = null;
            } else {
                var promise = db.collection("Users").doc(post.originalPoster).get().then(
                    (DocumentSnapshot) => {
                        var user = new User();
                        user.full_name = DocumentSnapshot.get("full_name");
                        user.profilePicture = DocumentSnapshot.get("profilePictureURL");
                        user.userID = DocumentSnapshot.id;
                        user.userName = DocumentSnapshot.get("name");
                        user.userSurname = DocumentSnapshot.get("surname");
                        post.user = user;
                    }
                );
                promiseArray.push(promise);
            }
        }));
        await Promise.all(promiseArray);
        return;
    }

    addPost(docSnap) {
        var docID = docSnap.id;
        var title = docSnap.get("title");
        var description = docSnap.get("description");
        var report = docSnap.get("report");
        var originalPoster = docSnap.get("originalPoster");
        var thanksCount = docSnap.get("thanksCount");
        var wowCount = docSnap.get("wowCount");
        var haCount = docSnap.get("haCount");
        var niceCount = docSnap.get("niceCount");
        var type = docSnap.get("type");
        var createTime = docSnap.get("createTime");
        var commentCount = docSnap.get("commentCount");
        var tags = docSnap.get("tags");
        var linkedFactID = docSnap.get("linkedFactID");

        var post = new Post();
        post.documentID = docID;
        post.title = title;
        post.description = description;
        post.report = report;
        post.originalPoster = originalPoster;
        post.thanksCount = thanksCount;
        post.wowCount = wowCount;
        post.haCount = haCount;
        post.niceCount = niceCount;
        post.type = type;
        post.createTime = createTime;
        post.commentCount = commentCount;
        post.tags = tags;
        post.linkedFactID = linkedFactID;
        post.createTimeString = post.convertTime();

        switch (post.type) {
            case "picture":
                return this.addPicturePost(docSnap, post);
            case "thought":
                return post;
            case "link":
                return this.addLinkPost(docSnap, post);
            case "GIF":
                return this.addGIFPost(docSnap, post);
            case "youTubeVideo":
                return this.addYouTubePost(docSnap, post);
            case "multiPicture":
                return this.addMultiPicturePost(docSnap, post);
            default:
                return this.addDefaultPost(docSnap, post);
        }


    }


    addPicturePost(docSnap, post) {
        var imageHeight = docSnap.get("imageHeight");
        var imageWidth = docSnap.get("imageWidth");
        var imageURL = docSnap.get("imageURL");

        post.imageHeight = imageHeight;
        post.imageWidth = imageWidth;
        post.imageURL = imageURL;

        return post;
    }

    addLinkPost(docSnap, post) {
        post.link = docSnap.get("link");
        post.linkDescription = docSnap.get("linkDescription");
        post.linkImageURL = docSnap.get("linkImageURL");
        post.linkShortURL = docSnap.get("linkShortURL");
        post.linkTitle = docSnap.get("linkTitle");
        return post;
    }

    addGIFPost = (docSnap, post) => {
        post.gif_link = docSnap.get("link");
        return post;
    }

    addMultiPicturePost = (docSnap, post) => {
        post.mpicture_imageHeight = docSnap.get("imageHeight");
        post.mpicture_imageWidth = docSnap.get("imageWidth");
        post.mpicture_imageURL = docSnap.get("imageURL");
        post.mpicture_imageURLs = docSnap.get("imageURLs");
        return post;
    }

    addYouTubePost = (docSnap, post) => {
        post.youtube_link = docSnap.get("link");
        return post;
    }

    addDefaultPost(docSnap, post) {
        post.title = "Fehlerhafter Post";
        post.description = "Fehlerhafter Post";

        return post;
    }


}

export default FetchHelper;