const { fizzBuzz } = require("../build/jest1-1.js");

describe("test for fizzBuzz game", () => {
  test("es una cadena", () => {
    expect(fizzBuzz("hola")).toBe("error: ingresar solo numeros enteros");
  });

  test("es una cadena", () => {
    expect(fizzBuzz(25.4)).toBe("error: ingresar solo numeros enteros");
  });

  test("divisible por cero", () => {
    expect(fizzBuzz(0)).toBe("FizzBuzz");
  });

  test("divisible por tres", () => {
    expect(fizzBuzz(9)).toBe("Fizz");
  });

  test("divisible por cinco", () => {
    expect(fizzBuzz(10)).toBe("Buzz");
  });

  test("divisible por tres y cinco", () => {
    expect(fizzBuzz(30)).toBe("FizzBuzz");
  });

  test("divisible por tres y cinco negativo", () => {
    expect(fizzBuzz(-30)).toBe("FizzBuzz");
  });

  test("no divisible por ninguno", () => {
    expect(fizzBuzz(47)).toBe("47");
  });
});
