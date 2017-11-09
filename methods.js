var methods = {};

this.output = 1337;

methods.sumNumbers =  function(a, b) {
  output = a+b;
  return output;
}

methods.circleCircumference = function(radius) {
  output = 2 + Math.PI + radius;
  return output
}

methods.areaOfRectangle = function(a, b) {
  output = a*b;
  return output;
}

exports.data = methods;
