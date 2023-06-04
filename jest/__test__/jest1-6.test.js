const { maxUnosCon } = require("../build/jest1-6.js");

describe("test para contar max unos consecutivos", () => {
  test("no ingresa nada", () => {
    expect(maxUnosCon([])).toBe("Debe ingresar un arreglo de ceros y unos");
  });

  test("no es un arreglo", () => {
    expect(maxUnosCon(321654)).toBe("Debe ingresar un arreglo de ceros y unos");
  });

  test("escrito en string", () => {
    expect(maxUnosCon(["0","1","1","0"])).toBe(2);
  });

  test("solo unos", () => {
    expect(maxUnosCon([1,1,1,1,1,1,1,1])).toBe(8);
  });

  test("solo ceros", () => {
    expect(maxUnosCon([0,0,0,0,0,0])).toBe(0);
  });
  
  test("se repite varias veces", () => {
    expect(maxUnosCon([1,1,1,0,0,1,1,0,1])).toBe(3);
  });
  test("tiene otros valores", () => {
    expect(maxUnosCon([1,1,2,0,0,1,1,0,1])).toBe(-1);
  });


})