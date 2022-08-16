import express from "express";

const app = express();
app.use(express.json());
const livros = [
  {
    id: 1,
    titulo: "Senhor dos Aneis",
  },
  {
    id: 2,
    titulo: "O Hobbit",
  },
];

//se a rota for localhost:3000
app.get("/", (req, res) => {
  res.status(200).send("Curso de Node");
});

//se a rota for localhost:/livros, retorna um json
app.get("/livros", (req, res) => {
  res.status(200).json(livros);
});

app.post("/livros", (req, res) => {
  livros.push(req.body);
  res.status(201).send("Livro cadastrado com sucesso");
});

//o índice do elemento a ser atualizado é passado na url
app.put("/livros/:id", (req, res) => {
  let index = buscaLivros(req.params.id);
  livros[index].titulo = req.body.titulo;
  res.json(livros).send('Livro atualizado com sucesso');
});

app.delete("/livros/:id", (req, res) => {
  let index = buscaLivros(req.params.id);
  livros.splice(index,1)
  res.json(livros).send('Livro Excluído');
});

function buscaLivros(id) {
  return livros.findIndex((livro) => livro.id == id);
}

export default app;
