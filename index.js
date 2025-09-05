import express from "express";

const app = express();

const listaDeTarefas = [];

app.use(express.json());

app.get("/", (requisicao, resposta) => {
  resposta.send("Hello world of fullstack.");
});

app.get("/lista-de-tarefas", (requisicao, resposta) => {
  resposta.send(listaDeTarefas);
});

app.post("/lista-de-tarefas", (requisicao, resposta) => {
  listaDeTarefas.push(requisicao.body);
  resposta.send(listaDeTarefas);
});

app.listen(3000);
