const { indicePrimerLetraRepe } = require("../build/jest1-5.js");

describe("test para devolver indice de primer letra repetida", () => {
  test("no ingresa nada", () => {
    expect(indicePrimerLetraRepe("")).toBe(-1);
  });

  test("ignora espacio", () => {
    expect(indicePrimerLetraRepe("a    a")).toBe(0);
  });

  test("ingreso un nro", () => {
    expect(indicePrimerLetraRepe(25)).toBe("debe ingresar una cadena");
  });

  test("ingreso un vector", () => {
    expect(indicePrimerLetraRepe(["hola como estas"])).toBe("debe ingresar una cadena");
  });

  test("no es sensible a mayuscula o minuscula", () => {
    expect(indicePrimerLetraRepe("UnAamarra")).toBe(2);
  });

  test("no se repite", () => {
    expect(indicePrimerLetraRepe("noserepite")).toBe(-1);
  });
});
