import express from "express";

const app = express();

interface Tarefa {
  title: string;
  description: string;
}

const listaDeTarefas: Tarefa[] = [];

app.use(express.json());

app.get("/", (requisicao, resposta) => {
  resposta.send("Hello world of fullstack!");
});

app.get("/lista-de-tarefas", (requisicao, resposta) => {
  resposta.send(listaDeTarefas);
});

app.post("/lista-de-tarefas", (requisicao, resposta) => {
  const tarefa: Tarefa = requisicao.body;
  console.log("Titulo da tarefa: ", tarefa.title);
  listaDeTarefas.push(tarefa);
  resposta.send(listaDeTarefas);
});

app.listen(3000, () => {
  console.log("Server started on http://localhost:3000");
});
