var leitor = require("readline-sync");
let AlturaTri:Number = leitor.question("Digite o valor da altura do triangulo: ");
let BaseTri:Number = leitor.question("Digite o valor da base do triangulo: ");
let resultaTri:Number = (Number(BaseTri) * Number(AlturaTri))/2

console.log(`A area do triangulo é: ${resultaTri}`)