const convertToCelsius = function(startTempF) {
  const tempC = Math.round(((startTempF - 32) * 5/9) * 10) / 10;
  return tempC;
};

const convertToFahrenheit = function(startTempC) {
  const tempF = Math.round((startTempC * (9/5) + 32) * 10) / 10;
  return tempF;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
