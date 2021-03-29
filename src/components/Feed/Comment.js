class Comment {

    constructor() {
        this.body = null;
        this.sentAt = null;
        this.userID = null;
        this.user = null;
        this.sentAtString = null;
    }


    convertTime = () => {
        var date = this.sentAt.toDate();
        var year = date.getFullYear();
        var month = date.getMonth();
        var dayMonth = date.getDate();
        var dayWeek = date.getDay();

        var monthName = "";
        var dayName = "";
        switch (month) {
            case 0:
                monthName = "Januar";
                break;
            case 1:
                monthName = "Februar";
                break;
            case 2:
                monthName = "März";
                break;
            case 3:
                monthName = "April";
                break;
            case 4:
                monthName = "Mai";
                break;
            case 5:
                monthName = "Juni";
                break;
            case 6:
                monthName = "Juli";
                break;
            case 7:
                monthName = "August";
                break;
            case 8:
                monthName = "September";
                break;
            case 9:
                monthName = "Oktober";
                break;
            case 10:
                monthName = "November";
                break;
            case 11:
                monthName = "Dezember";
                break;
            default:
                console.log("Fehler");
                break;
        }

        switch (dayWeek) {
            case 0:
                dayName = "Montag";
                break;
            case 1:
                dayName = "Dienstag";
                break;
            case 2:
                dayName = "Mittwoch";
                break;
            case 3:
                dayName = "Donnerstag";
                break;
            case 4:
                dayName = "Freitag";
                break;
            case 5:
                dayName = "Samstag";
                break;
            case 6:
                dayName = "Sonntag";
                break;
            default:
                console.log("Fehler!");
                break;
        }

        var finishedDate =
            dayName + " den " + dayMonth + ". " + monthName + " " + year;
        return finishedDate;
    };


} export default Comment;