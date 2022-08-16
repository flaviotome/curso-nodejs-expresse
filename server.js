//servidor nativo
//import http from "http";

// const rotas = {
//   '/': 'Curso de Node',
//   '/biblioteca': 'lista de bibliotecas',
//   '/autor': 'Lista de autores'
// }

// const server = http.createServer((req, res) => {
//   //retorno do server para o navegador
//   //cabeçalho, retorna o código 200 e o tipo de dados esperado
//   res.writeHead(200, { "Content-Type": "text/plain" });
//   //redireciona o servidor para a rota informada na url
//   res.end(rotas[req.url])
// });

// //inicializa o servidor
// server.listen(port , () => {
//     console.log('Servidor escutando em http://localhost:'+port)
// } )

import app from "./src/app.js";
const port = process.env.port || 3000;

app.listen(port, () => {
  console.log("Servidor escutando em http://localhost:" + port);
});
