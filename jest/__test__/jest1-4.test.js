const { sumarArrPos } = require("../build/jest1-4.js");

describe("test para sumar positivos en arreglo", () => {
  test("no ingresa nada", () => {
    expect(sumarArrPos([])).toBe(0);
  });

  test("no es arreglo", () => {
    expect(sumarArrPos("hola")).toBe("Error: debe ingresar un array");
  });

  test("arreglo caracteres especiales", () => {
    expect(sumarArrPos(["@"])).toBe(0);
  });

  test("arreglo de cadena de números", () => {
    expect(sumarArrPos(["1", "2", "3"])).toBe(6);
  });
  
  test("arreglo de números en string", () => {
    expect(sumarArrPos(["uno","dos","tres"])).toBe(0);
  });

  test("números negativos", () => {
    expect(sumarArrPos([-1, -3])).toBe(0);
  });

});
