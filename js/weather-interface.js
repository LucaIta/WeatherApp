var apiKey = require('./../.env').apiKey;


$(document).ready(function() {
  $("#weatherLocation").click(function(){
    var location = $("#location").val();
    $(".showWeather").text("Here is the data for " + location + ":");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + location + '&appid=' + apiKey).then(function(response){
      console.log(response);
      $(".showData").text(response.main.humidity);
    }).fail(function(error){
      $(".showData").text(error.responseJSON.message);
    });
  });
});
