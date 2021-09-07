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

var verify = setInterval(colorTime);

function colorTime() {
    var rightNow = moment().hours(hourSign);
    $(".time-block").each(function () {
        var blockHour = parseInt($(this).attr("id").split(" "));

        if (blockHour < rightNow) {
            $(this).addClass("past");
        } else if (blockHour === rightNow) {
            $(this).addClass("present"); $(this).removeClass("past");
        } else {
            $(this).removeClass("present"); $(this).removeClass("past"); $(this).addClass("future");
        }
    });
}