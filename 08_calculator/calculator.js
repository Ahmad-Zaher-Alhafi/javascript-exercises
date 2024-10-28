const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (arr) {
  res = 0;
  for (let index = 0; index < arr.length; index++) {
    res += arr[index]
  }

  return res;
};

const multiply = function (arr) {
  res = 1;
   for (let index = 0; index < arr.length; index++) {
    res *= arr[index]
  }
  return res;
};

const power = function (num1, num2) {
  return Math.pow(num1, num2);
};

const factorial = function (num) {
  fac = 1;
  for (let index = 1; index <= num; index++) {
    fac *= index;
  }

  return fac;
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
