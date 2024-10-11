import { sub } from "../sub";

describe("sub suite",()=>{
    it("a subtração de 5 - 1 é igual a 4", ()=>{
        expect(sub(5,1)).toEqual(4)
    })
    it("a subtração de 5 e 1 é igual a 4", ()=>{
        expect(sub(5,1)).toEqual(4)
    })
})