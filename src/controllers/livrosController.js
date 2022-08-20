import livros from "../models/Livro.js";

class LivroController {
  //GET todos os livros
  static listarLivros = (req, res) => {
    //coleção de livros do mongoose
    livros.find((err, livros) => {
      res.status(200).json(livros);
    });
  };

  static listarLivrosPorId = (req, res) => {
    const id = req.params.id;

    livros.findById(id, (err, livros) => {
      if (err) {
        res.status(400).send(err.message + " Id do livro não encontrada");
      } else {
        res.status(200).send(livros);
      }
    });
  };

  static cadastrarLivro = (req, res) => {
    //cri uma nova instância do objeto livros (model) com os atributos passados no corpo da requisição
    let livro = new livros(req.body);

    //POST
    livro.save((err) => {
      //em caso de erro, retorna uma mensagem
      if (err) {
        res
          .status(500)
          .send({ message: "erro ao cadastrar o livro:" + err.message });
      } else {
        //em caso de sucesso, retorna o código e o json com a lista de livros
        res.status(201).send(livro.toJSON());
      }
    });
  };

  static atualizaLivro = (req, res) => {
    //a id do livro é passada pela url
    const id = req.params.id;
    //busca pelo id e atualiza usando o método SET do mongoose
    livros.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (!err) {
        res.status(200).send("Livro Atualizado com sucesso");
      } else {
        res.status(500).send(err.message);
      }
    });
  };

  static excluirLivro = (req, res) => {
    const id = req.params.id;

    livros.findByIdAndDelete(id, (err) => {
      if (!err) {
        res.status(200).send("Livro excluído com sucesso");
      } else {
        res.status(500).send("Deu Merda " + err.message);
      }
    });
  };
}

export default LivroController;
