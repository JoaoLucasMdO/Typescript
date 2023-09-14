var leitor = require("readline-sync");
let vetor1:Array<number> = [] 
let vetor2:Array<number> = []
let somas:Array<number> = [] 

vetor1[0] = leitor.question("Digite o 1 Valor do Vetor1: ");
vetor1[1] = leitor.question("Digite o 2 Valor do Vetor1: ");
vetor1[2] = leitor.question("Digite o 3 Valor do Vetor1: ");
vetor1[3] = leitor.question("Digite o 4 Valor do Vetor1: ");
vetor1[4] = leitor.question("Digite o 5 Valor do Vetor1: ");

vetor2[0] = leitor.question("Digite o 1 Valor do Vetor2: ");
vetor2[1] = leitor.question("Digite o 2 Valor do Vetor2: ");
vetor2[2] = leitor.question("Digite o 3 Valor do Vetor2: ");
vetor2[3] = leitor.question("Digite o 4 Valor do Vetor2: ");
vetor2[4] = leitor.question("Digite o 5 Valor do Vetor2: ");

somas[0] = Number(vetor1[0]) + Number(vetor2[0])
somas[1] = Number(vetor1[1]) + Number(vetor2[1])
somas[2] = Number(vetor1[2]) + Number(vetor2[2])
somas[3] = Number(vetor1[3]) + Number(vetor2[3])
somas[4] = Number(vetor1[4]) + Number(vetor2[4])

console.log(`Vetor1 = ${vetor1[0]}, ${vetor1[1]}, ${vetor1[2]}, ${vetor1[3]}, ${vetor1[4]}
Vetor2 = ${vetor2[0]}, ${vetor2[1]}, ${vetor2[2]}, ${vetor2[3]}, ${vetor2[4]}
A soma dos vetores = ${somas[0]}, ${somas[1]}, ${somas[2]}, ${somas[3]}, ${somas[4]}`)