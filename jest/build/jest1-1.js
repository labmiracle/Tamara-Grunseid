function fizzBuzz(num) {
  if (typeof num !== "number" || !Number.isInteger(num)) {
    return "error: ingresar solo numeros enteros";
  }
  if ((num % 3 === 0) & (num % 5 === 0)) {
    return "FizzBuzz";
  } else {
    if (num % 3 === 0) {
      return "Fizz";
    } else {
      if (num % 5 === 0) {
        return "Buzz";
      } else {
        return num.toString();
      }
    }
  }
}

module.exports = { fizzBuzz };
