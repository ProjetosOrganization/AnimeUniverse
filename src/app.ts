import { attachControllers } from "@decorators/express";
import express = require("express");
export const app = express();

import { OnePieceController, GurrenController, itemController, } from "."

attachControllers(app, [GurrenController, OnePieceController, itemController]);


app.get('/', function (req, res) {
  res.send('Teste');
});

app.use((req, res, next) => {
  const erro = new Error("Não encontrado");
  erro.message = "Não foi encontrado a rota.";
  next(erro);
});
app.use(
  (
    erro: { status: any; mensagem: any },
    req: any,
    res: {
      status: (arg0: any) => void;
      send: (arg0: { erro: { mensagem: any } }) => void;
    },
    next: any
  ) => {
    res.status(erro.status || 500);
    return res.send({
      erro: {
        mensagem: erro.mensagem,
      },
    });
  }
);

