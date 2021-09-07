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

for (var i = 0; i < hourSign.length; i++) {
    var differentButton = $("<button type='button' class='saveBtn col-1 far fa-save'>");
    var break1 = $("<div class='hour col-1'>");
    var brandLine = $("<div class='row time-block'>").attr("id", listL[i]);
    var break2 = $("<textarea class='col-10'>");

    squareT.append(brandLine); break1.text(hourSign[i]); brandLine.append(break1); brandLine.append(break2); brandLine.append(differentButton);
}

//This is my function to apply background coloring on the current hour for the appropriate row 
var verify = setInterval(colorTime);

function colorTime() {
    var rightNow = moment().hours();
    $(".time-block").each(function () {
        var blockHour = parseInt($(this).attr("id").split(" "));

        if (blockHour < rightNow) {
            $(this).addClass("past");
        } else if (blockHour === rightNow) {
            $(this).addClass("present"); 
            $(this).removeClass("past");
        } else {
            $(this).removeClass("present"); 
            $(this).removeClass("past"); 
            $(this).addClass("future");
        }
    });
}
grabLocalInformation();

function grabLocalInformation() {
    $("textarea")[0].value = localStorage.getItem("textarea1"); $("textarea")[1].value = localStorage.getItem("textarea2"); $("textarea")[2].value = localStorage.getItem("textarea3"); $("textarea")[3].value = localStorage.getItem("textarea4"); $("textarea")[4].value = localStorage.getItem("textarea5"); $("textarea")[5].value = localStorage.getItem("textarea6"); $("textarea")[6].value = localStorage.getItem("textarea7"); $("textarea")[7].value = localStorage.getItem("textarea8"); $("textarea")[8].value = localStorage.getItem("textarea9");
}

$("button").on("click", function (event) {
    event.preventDefault();
    var firstBlock = $("textarea")[0].value, secondBlock = $("textarea")[1].value, thirdBlock = $("textarea")[2].value, fourthBlock = $("textarea")[3].value, fifthBlock = $("textarea")[4].value, sixthBlock = $("textarea")[5].value, seventhBlock = $("textarea")[6].value, eighthBlock = $("textarea")[7].value, ninethBlock = $("textarea")[8].value;

    localStorage.setItem("textarea1", firstBlock); localStorage.setItem("textarea2", secondBlock); localStorage.setItem("textarea3", thirdBlock); localStorage.setItem("textarea4", fourthBlock); localStorage.setItem("textarea5", fifthBlock); localStorage.setItem("textarea6", sixthBlock); localStorage.setItem("textarea7", seventhBlock); localStorage.setItem("textarea8", eighthBlock); localStorage.setItem("textarea9", ninethBlock);
});