const add = function(a, b) {
	return a+b;
};

const subtract = function(a, b) {
	return a-b
};

const sum = function(array) {
  if (array.length == 0) {
    return 0
  }
  return array.reduce((total,n) => {
    return total+n
  });
};

const multiply = function(array) {
  return array.reduce((total,n) => {
    return total*n
  });
};

const power = function(a,b) {
	return a**b
};

const factorial = function(n) {
  if (n==0 || n==1) {
    return 1
  }
  var total = 1
  while (n>1) {
    total *= n
    n-=1
  }
  return total
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
