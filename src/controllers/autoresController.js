import autores from "../models/Autor.js";

class AutorController {
  //GET todos os autores
  static listarAutores = (req, res) => {
    //coleção de autores do mongoose
    autores.find((err, autores) => {
      res.status(200).json(autores);
    });
  };

  static listarAutoresPorId = (req, res) => {
    const id = req.params.id;

    autores.findById(id, (err, autores) => {
      if (err) {
        res.status(400).send(err.message + " Id do autor não encontrada");
      } else {
        res.status(200).send(autores);
      }
    });
  };

  static cadastrarAutor = (req, res) => {
    //cri uma nova instância do objeto autores (model) com os atributos passados no corpo da requisição
    let autor = new autores(req.body);

    //POST
    autor.save((err) => {
      //em caso de erro, retorna uma mensagem
      if (err) {
        res
          .status(500)
          .send({ message: "erro ao cadastrar o autor:" + err.message });
      } else {
        //em caso de sucesso, retorna o código e o json com a lista de autores
        res.status(201).send(autor.toJSON());
      }
    });
  };

  static atualizaAutor = (req, res) => {
    //a id do livro é passada pela url
    const id = req.params.id;
    //busca pelo id e atualiza usando o método SET do mongoose
    autores.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (!err) {
        res.status(200).send("Autor Atualizado com sucesso");
      } else {
        res.status(500).send(err.message);
      }
    });
  };

  static excluirAutor = (req, res) => {
    const id = req.params.id;

    autores.findByIdAndDelete(id, (err) => {
      if (!err) {
        res.status(200).send("Autor excluído com sucesso");
      } else {
        res.status(500).send("Deu Merda " + err.message);
      }
    });
  };
}

export default AutorController;
