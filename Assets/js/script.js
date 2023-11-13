$(document).ready(function () {
    var saveBtn = document.querySelector(".saveBtn");
    var today = dayjs()
    $('#currentDay').text(today.format('D, MMM,  YYYY'));
    $(function () {
    });
    var currentHour = dayjs().hour();
    function trackHour() {
      $('.time-block').each(function () {
          var scheduleHours = $(this).attr("id").split("hour-")[1];
          console.log("currentHour " + currentHour)
          console.log("scheduleHour " + scheduleHours)
          if (scheduleHours < currentHour) {
              $(this).addClass("past");
          }
          else if (scheduleHours == currentHour) {
              $(this).addClass("present");
          }
          else {
              $(this).addClass("future");
          }
      })
    }
    $(".saveBtn").on("click", function () {
      var value = $(this).siblings(".description").val();
      var time = $(this).parent().attr("id");
      localStorage.setItem(time, value);
    })
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));
    trackHour();
    });
