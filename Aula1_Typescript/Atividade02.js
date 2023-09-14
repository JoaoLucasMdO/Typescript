var leitor = require("readline-sync");
var numero = leitor.question("Digite o numero a ser calculado: ");
var numReajuste = Number(numero) + Number((numero * 0.10));
console.log("Numero reajustado:".concat(numReajuste));
