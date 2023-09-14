const leitor = require("readline-sync")
function VerificaPositivo(){
    let num1:number = leitor.question("Digite um número: ")

    if(num1>0){
        console.log("O número é positivo!")
    }
    else if (num1 == 0){
        console.log("O número é neutro")
    }
    else{
        console.log("O número é negativo!")
    }
}

function VerificaIntervalo(){
    let num2 = leitor.question("Digite um número: ")

if(num2 >= 10 && num2 <= 20 ){
    console.log("O número está entre 10 e 20")
}
else{
    console.log("O número não está entre 10 e 20")
}
}

function VerificaIntervalo2(){
    
let num3 = leitor.question("Digite um número: ")

if(num3 >= 20 || num3 <= 10 ){
    console.log("O número não está entre 10 e 20")
}
else{
    console.log("O número está entre 10 e 20")
}
}

function Switch(){
const dia = Number(leitor.question("Digite o dia da semana: "))

switch (dia) {
    case 1:
        console.log("Segunda-feira")        
        break;

    case 2:
    case 3:
        console.log("Terça-feira")
        break;

    case 6:
    case 7:
        console.log("Cabo")
        break
    default:
        console.log("não tem")
        break;
}
}

function Energia(){
    let instalação = leitor.question("Digite o tipo de residencia(R/I/C): ")
    let KWh = Number(leitor.question("Digite a quantidade de KWh: "))
    instalação = instalação.charAt(0).toUpperCase()
    switch (instalação) {
        case "R":
            if(KWh > 500){
                let preco = KWh * 0.65
                console.log(`O valor é R$${preco}`)
            }

            else{
                let preco = KWh * 0.40
                console.log(`O valor é R$${preco}`)
            }
        break;

        case "I":
            if(KWh > 5000){
                let preco = KWh * 0.60
                console.log(`O valor é R$${preco}`)
            }

            else{
                let preco = KWh * 0.55
                console.log(`O valor é R$${preco}`)
            }
        break;

        case "C":
            if(KWh > 1000){
                let preco = KWh * 0.60
                console.log(`O valor é R$${preco}`)
            }

            else{
                let preco = KWh * 0.55
                console.log(`O valor é R$${preco}`)
            }
        break;

        default:
        console.log("Tipo de residência inválido!")
        break;
    }

}


//verificaPositivo()
//verificaIntervalo()
//verificaIntervalo2()
//Switch()
Energia()