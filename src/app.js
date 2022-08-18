import express from "express";
import db from "./config/dbConnect.js";
//importa o Model Livro, que contem o esquema da colação Livros
import livros from "./models/Livro.js";

//retorna a mensagem em caso de err
db.on("error", console.log.bind(console, "Erro de Conexão"));

//roda a conexão uma vez
db.once("open", () => {
  console.log("conexao feita com sucesso");
});

const app = express();
app.use(express.json());

//se a rota for localhost:3000
app.get("/", (req, res) => {
  res.status(200).send("Curso de Node");
});

//se a rota for localhost:/livros, retorna um json

app.post("/livros", (req, res) => {
  livros.push(req.body);
  res.status(201).send("Livro cadastrado com sucesso");
});

//o índice do elemento a ser atualizado é passado na url
app.put("/livros/:id", (req, res) => {
  let index = buscaLivros(req.params.id);
  livros[index].titulo = req.body.titulo;
  res.json(livros).send("Livro atualizado com sucesso");
});

app.delete("/livros/:id", (req, res) => {
  let index = buscaLivros(req.params.id);
  livros.splice(index, 1);
  res.json(livros).send("Livro Excluído");
});

function buscaLivros(id) {
  return livros.findIndex((livro) => livro.id == id);
}

export default app;
