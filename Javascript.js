var hourSign = [
    "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM", "6 PM", "7 PM", "8 PM"
];

var listL = [
    "12", "13", "14", "15", "16", "17", "18", "19", "20"
];

//This is my current date and time to be shown in the class of currentDay using moment.js
var squareT = $(".container");

var clockT = moment().format('MMMM Do YYYY, h:mm:ss a');

var hereT = $("#currentDay");
hereT.append(clockT);