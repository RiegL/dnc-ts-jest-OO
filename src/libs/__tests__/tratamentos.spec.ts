import {ultimoValor} from '../tratamentos'
import { listaMocks } from '../__mocks__/tratamentos.mock'
describe("traramentos suite",()=>{
    it("deve retornar ana ", ()=>{
        expect(ultimoValor(listaMocks)).toBe("ana")
    })
})