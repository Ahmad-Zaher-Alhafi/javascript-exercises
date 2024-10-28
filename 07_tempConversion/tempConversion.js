const convertToCelsius = function (tempF) {
  return parseFloat(((tempF - 32) * (5 / 9)).toFixed(1));
};

const convertToFahrenheit = function (tempC) {
  return parseFloat(((tempC * (9 / 5)) + 32).toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
