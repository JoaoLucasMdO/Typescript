var leitor = require("readline-sync")
let numero:number =  leitor.question("Digite o numero a ser calculado: ")
let numReajuste:number = Number(numero) + Number((numero * 0.10))
console.log(`Numero reajustado:${numReajuste}`)