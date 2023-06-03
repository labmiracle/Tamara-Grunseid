const { bisiesto } = require("../build/jest1-2.js");

describe("test para año bisiesto", () => {
  test("divisible por 400", () => {
    expect(bisiesto(2000)).toBeTruthy();
  });

  test("divisible por 100", () => {
    expect(bisiesto(2100)).toBeFalsy();
  });

  test("divisible por 4", () => {
    expect(bisiesto(2024)).toBeTruthy();
  });

  test("negativo", () => {
    expect(bisiesto(-200)).toBeFalsy();
  });

  test("cadena", () => {
    expect(bisiesto("hola")).toBeFalsy();
  });
  test("número decimal", () => {
    expect(bisiesto(2000.5)).toBeFalsy();
  });

  test("0", () => {
    expect(bisiesto(0)).toBeFalsy();
  });

  test("no se proporciona un argumento", () => {
    expect(bisiesto()).toBeFalsy();
  });
});
