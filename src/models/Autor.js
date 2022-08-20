import mongoose from "mongoose";

const autorSchema = new mongoose.Schema(
  {
    id: { type: String },
    nome: { type: String, require: true },
    nacionalidade: { type: String, require: true },
  },
  {
    versionKey: false, //não faz o versionamento da coleção
  }
);

const autores = mongoose.model("autores", autorSchema);

export default autores;
