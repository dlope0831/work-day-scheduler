$(document).ready (function(){
    $(".btn").on ("click",function(){
        var i = $(this).parent().attr("id")
        var userInput = $(this).siblings("textarea").val()
        console.log(i)
        console.log(this)
        console.log(userInput)
        localStorage.setItem(i, userInput)
    })
});
$("#hour-7 textarea").val(localStorage.getItem("hour-7"))
$("#hour-8 textarea").val(localStorage.getItem("hour-8"))
$("#hour-9 textarea").val(localStorage.getItem("hour-9"))
$("#hour-10 textarea").val(localStorage.getItem("hour-10"))
$("#hour-11 textarea").val(localStorage.getItem("hour-11"))
$("#hour-12 textarea").val(localStorage.getItem("hour-12"))
$("#hour-13 textarea").val(localStorage.getItem("hour-13"))
$("#hour-14 textarea").val(localStorage.getItem("hour-14"))
$("#hour-15 textarea").val(localStorage.getItem("hour-15"))
$("#hour-16 textarea").val(localStorage.getItem("hour-16"))
$("#hour-17 textarea").val(localStorage.getItem("hour-17"))
$("#hour-18 textarea").val(localStorage.getItem("hour-18"))


var currentTime = moment().hours()
$(".task-row").each(function(){
    var thisHour = $(this).attr("id").split("-")[1]
    if (thisHour < currentTime) {
        $(this).children("textarea").addClass("bg-secondary")
    } else if (thisHour == currentTime) {
        $(this).children("textarea").addClass("bg-danger")
    } else {
        $(this).children("textarea").addClass("bg-success")
    }
})


var today = new Date();
var date = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
document.getElementById("currentDay").innerHTML = date;



