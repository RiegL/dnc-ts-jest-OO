import {
  listaMocks,
  listaMocksHomem,
  listaMocksMulher,
} from "../__mocks__/tratamentos.mock";
import { descobrirNomes } from "../nomes";

describe.skip("nomes suite", () => {
  it("deve retornar o ultimo nome de cada lista", () => {
    expect(
      descobrirNomes([listaMocks, listaMocksHomem, listaMocksMulher])
    ).toBe("ana");
  });
});
