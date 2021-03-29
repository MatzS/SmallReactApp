import React, { Component } from 'react';
import FetchHelper from "../FetchHelper";
import "../../Layout/Communities/SingleCommunityView.css";
import SingleCommunityHeader from "./SingleCommunityHeader";
import CommunityFeed from "./CommunityFeed";

class SingleCommunityView extends Component {

    constructor(props) {
        super(props);
        this.state.id = props.match.params.id;
        this.state.fetching = true;
    }

    state = {
        id: null,
        community: null,
        fetching: true
    }

    componentDidMount = () => {
        if (this.state.id) {
            var helper = new FetchHelper();
            var promise = helper.fetchSingleCommunity(this.state.id);
            promise.then((comm) => {
                this.setState({ community: comm })
            })
        } else {
            return;
        }
    }

    render() {
        if (this.state.community) {
            return (
                <div className="singleCommunityContainer">
                    <SingleCommunityHeader community={this.state.community}></SingleCommunityHeader>
                    <CommunityFeed community={this.state.community}></CommunityFeed>
                </div>
            );
        } else {
            return (
                <div></div>
            );
        }

    }
}

export default SingleCommunityView;
