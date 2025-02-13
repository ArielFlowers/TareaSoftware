import multiplicar from "./multiplicador.js";

describe("Multiplicar", () => {
  it("debería multiplicar dos números", () => {
    expect(multiplicar(3, 2)).toEqual(6);
  });
});
