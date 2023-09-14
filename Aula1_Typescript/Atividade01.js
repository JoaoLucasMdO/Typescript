var leitor = require("readline-sync");
var nome = leitor.question("Digite o seu nome: ");
var end = leitor.question("Digite o seu endereco: ");
var tel = leitor.question("Digite o seu numero de telefone: ");
console.log("Nome:".concat(nome, "| Endereco:").concat(end, "| Telefone:").concat(tel));
