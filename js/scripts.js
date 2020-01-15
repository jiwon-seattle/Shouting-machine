$(document).ready(function() {
  $("#shouting").submit(function(event) {
    event.preventDefault();


    $("#result").append($("input#machine").val().toUpperCase());


  });
});
