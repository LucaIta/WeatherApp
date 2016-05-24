var apiKey = require('./../.env').apiKey;
var Kelvin = require('./../js/temperatureConverter.js').Kelvin;

$(document).ready(function() {
  $('#locationTemp').click(function(){
    var location = $('#location').val();
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + location + '&appid=' + apiKey).then(function(response){
      var kelvin = new Kelvin(response.main.temp);
      $('.showData').text(kelvin.toCelcius());
      console.log(response);
    }).fail(function(error){
      $('.showData').text(error.responseJSON.message);
    });
  });
});
