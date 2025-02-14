import * as express from "express";
import produtoFactory from "./produto.factory";
import { ultimoValor } from "../../libs/tratamentos";

const router = express.Router();

router.get("/", async (_, res) => {
  const data = await produtoFactory.getAll();
  return res.status(200).json({ data });
});

router.post("/", async (req, res) => {
  const data = await produtoFactory.store(req.body);
  return res.status(200).json({ data });
});

router.post("/ultimo-valor", async (req, res) => {
  const response = ultimoValor(req.body);
  return res.status(200).json(response);
});

export default router;
