const convertToCelsius = function(far) {
  let celsius = (far - 32) * (5 / 9); 
  let round = Math.round(celsius * 10) / 10;
  return round;
};

const convertToFahrenheit = function(cel) {
  let fahrenh = (cel * 9 / 5) + 32; 
  let round = Math.round(fahrenh * 10) / 10;
  return round;

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
