var leitor = require("readline-sync");
var ValorHora = leitor.question("Digite o valor da hora aula: ");
var AulasDadas = leitor.question("Digite o numero de aulas dadas: ");
var INSS = leitor.question("Digite o valor de desconto do INSS: ");
var Salario = ValorHora * AulasDadas;
var SalarioFinal = Number(Salario) + Number(Salario * (INSS / 100));
console.log("O salario \u00E9: ".concat(SalarioFinal));
