const convertToCelsius = function(aTemp) {
  return Math.round((((aTemp-32)*5)/9)*10)/10;
};

const convertToFahrenheit = function(aTemp) {
  return Math.round(((aTemp*1.8)+32)*10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
