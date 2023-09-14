var leitor = require("readline-sync");
let Valor:Number = leitor.question("Digite o valor: ");
let AntValor:Number = Number(Valor) - 1

console.log(`O valor Antescessor ao digitado é: ${AntValor}`)