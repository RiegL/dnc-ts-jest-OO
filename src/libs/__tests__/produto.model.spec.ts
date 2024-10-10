import { Produto } from "../../module/produto/produto.model"
import { KnexService } from "../../service/knex";
describe("produto model Suite", ()=>{
    it('deve retornar valores do modelo', async ()=>{
        const produto = new Produto(new KnexService());
        const response = await produto.getAll()
        expect(response).toBeTruthy()
        expect(response.length).toBe(1)
    })
})