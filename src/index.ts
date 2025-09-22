import express from "express";
import type { Task } from "./types.ts";
import cors from "cors";

const app = express();
app.use(cors());

const listaDeTarefas: Task[] = [
  {
    title: "Praticar fullstack",
    description:
      "Fazer atividades práticas e desenvolver uma aplicação web com front e backend. Também praticar conectar o front com o backend.",
  },
  {
    title: "Praticar backend",
    description:
      "Criar mais endpoints, incluindo endpoint de criação de tarefas.",
  },
  {
    title: "Praticar frontend",
    description:
      "Criar mais funcionalidades, incluindo um formulário para envio de tarefas novas.",
  },
];

app.use(express.json());

app.get("/", (requisicao, resposta) => {
  resposta.send("Hello world of fullstack.");
});

app.get("/tasks", (requisicao, resposta) => {
  resposta.send(listaDeTarefas);
});

app.post("/tasks", (requisicao, resposta) => {
  const { title, description } = requisicao.body;
  if (
    typeof title !== "string" ||
    typeof description !== "string" ||
    !title ||
    !description
  ) {
    return resposta.status(400).send({ error: "Invalid task format." });
  }
  const task: Task = { title, description };
  listaDeTarefas.push(task);
  resposta.send(listaDeTarefas);
});

app.listen(3000, () => {
  console.log("Server started at http://localhost:3000");
});
