var leitor = require("readline-sync");
var AlturaTri = leitor.question("Digite o valor da altura do triangulo: ");
var BaseTri = leitor.question("Digite o valor da base do triangulo: ");
var resultaTri = (Number(BaseTri) * Number(AlturaTri)) / 2;
console.log("A area do triangulo \u00E9: ".concat(resultaTri));
