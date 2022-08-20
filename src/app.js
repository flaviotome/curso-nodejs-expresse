import express from "express";
import db from "./config/dbConnect.js";
import routes from "./routes/index.js";

//retorna a mensagem em caso de err
db.on("error", console.log.bind(console, "Erro de Conexão"));

//roda a conexão uma vez
db.once("open", () => {
  console.log("conexao feita com sucesso");
});

//cria uma instância do express
const app = express();
app.use(express.json());
//passa a instância do expresse para o arquivo de rotas
routes(app);

export default app;
