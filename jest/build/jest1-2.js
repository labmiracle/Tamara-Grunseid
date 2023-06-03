function bisiesto(num) {
    if (typeof num !== "number" || !Number.isInteger(num) || num <= 0) {
      return false;
    }
  
    if ((num % 4 === 0 && num % 100 !== 0) || num % 400 === 0) {
      return true;
    } else {
      return false;
    }
  }
  
  module.exports = { bisiesto };