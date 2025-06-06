function kelvinToCelcius(temp) {
  return (temp - 273.15).toFixed(2);
}
function kelvinToFarenheit(temp) {
  return ((temp - 273.15) * (9 / 5) + 32).toFixed(2);
}

module.exports = { kelvinToCelcius, kelvinToFarenheit };
