const { baseCanonica } = require("../build/jest1-3.js");

describe("test para año sólo base Canonica", () => {
  test("no ingresa nada", () => {
    expect(baseCanonica("")).toBe("");
  });

  test("cadena con minúsculas", () => {
    expect(baseCanonica("AAaCcGgTt")).toBe("AACGT");
  });

  test("cadena con espacios", () => {
    expect(baseCanonica("AA C GT")).toBe("AACGT");
  });

  test("cadena con caracteres especiales", () => {
    expect(baseCanonica("A@A!CG-/T")).toBe("AACGT");
  });

  test("no es una cadena", () => {
    expect(baseCanonica(125)).toBe("Error: debe ingresar un string");
  });
});
