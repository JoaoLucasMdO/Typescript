var leitor = require("readline-sync")
let nome:string = leitor.question("Digite o seu nome: ")
let end:string = leitor.question("Digite o seu endereco: ")
let tel:number = leitor.question("Digite o seu numero de telefone: ")

console.log(`Nome:${nome}| Endereco:${end}| Telefone:${tel}`)