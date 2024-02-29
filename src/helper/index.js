import moment from "moment";

export const timeFormatter = (date) => {
    return date ? moment(date).format("dddd, Do MMMM YYYY - hh:mm A") : "";
}

