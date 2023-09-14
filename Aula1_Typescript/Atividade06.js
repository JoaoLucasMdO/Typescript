var leitor = require("readline-sync");
var Valor = leitor.question("Digite o valor: ");
var AntValor = Number(Valor) - 1;
console.log("O valor Antescessor ao digitado \u00E9: ".concat(AntValor));
