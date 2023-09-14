var leitor = require("readline-sync");
let ValorHora:number =  leitor.question("Digite o valor da hora aula: ");
let AulasDadas:number =  leitor.question("Digite o numero de aulas dadas: ");
let INSS:number =  leitor.question("Digite o valor de desconto do INSS: ");

let Salario = ValorHora * AulasDadas
let SalarioFinal =Number(Salario) + Number(Salario * (INSS/100))

console.log(`O salario é: ${SalarioFinal}`)