import { sum, sub } from "../sum"

describe('libs suite', ()=>{
    it('deve somar 1 + 2 e receber 3 como respota',()=>{
        expect(sum(1,2)).toBe(3)
    })

})
describe('libs suite', ()=>{
    it('deve subtrair 5 - 1 e receber 4 como respota',()=>{
        expect(sub(5,1)).toBe(4)
    })

})