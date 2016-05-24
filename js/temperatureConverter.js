Kelvin = function(kelvinTemp) {
  this.kelvinTemp = kelvinTemp;
}

Kelvin.prototype.toCelcius = function() {
  var celcius = this.kelvinTemp - 273.15;
  return celcius;
}

exports.Kelvin = Kelvin;
