let leitor = require("readline-sync");
function Ex01(){
    let nome : string = leitor.question("Digite seu nome completo: ");
    let lista: Array<String> = nome.split(" ")
    for(let i : number = 0; i < lista.length; i++){
        console.log(lista[i]);
    }
}

function Ex02(){
    let nome : string = leitor.question("Digite seu nome: ");
    let end : string = leitor.question("Digite seu endereço: ");
    let idade : number = leitor.question("Digite sua idade: ");

    console.log(`${nome} mora no endereço: ${end} e tem ${idade} anos.`)
}

function Ex03(){
    let idade : number = leitor.question("Digite sua idade: ");
    let idadeDias : number = idade * 365;
    console.log("Você tem " + idadeDias + " de idade em dias" );
}

function Ex04(){
    let numero : number = Number(leitor.question("Digite um número: "));
    console.log(`O número é ${numero}, seus sucessores são ${numero+1} e ${numero+2}, seus antecessores são ${numero-1} e ${numero-2}`);
}

function Ex05(){
    let salario : number = Number(leitor.question("Digite o salario: "));
    let percentual : number = Number(leitor.question("Digite o percentual de aumento: "));
    let salarioFinal : number = salario + salario *(percentual/100);
    console.log("Seu salario agora é: " + salarioFinal)
}

function Ex06(){
let numDolar : number = Number(leitor.question("Digite o dinheiro em dolar:"));
let numReal : number = numDolar * 5.47;
console.log(numDolar + " dolar em real é: " + numReal.toFixed(2));
}

function Ex07(){
let x : number = leitor.question("Digite o valor de x: ");
let y : number = leitor.question("Digite o valor de y: ");
let a : number;

a = x;
x = y;
y = a;

console.log("X: " + x +"|" + "Y: " + y);
}

function Ex08(){
let valLitro : number = Number(leitor.question("Valor do litro: "));
let valAbastecer : number = Number(leitor.question("Quanto a abastecer: "));
let valAbastecido = valAbastecer / valLitro;

console.log("Valor abastecido: " + valAbastecido.toFixed(2));
}

function Ex09(){
const kmLitro : number = 12;
let kmInicial : number = Number(leitor.question("Digite o km Inicial: "));
let kmFinal : number = Number(leitor.question("Digite o km Final: "))
let ltConsumido : number = Number(leitor.question("Digite quantos litros foram gastos: "));
let kmPercorrido : number = kmFinal - kmInicial;
let media : number = kmPercorrido / ltConsumido;

console.log("A média de consumo é: " + media);
}

function Ex010(){
let valorOriginal : number = Number(leitor.question("Digite o valor inicial da dívida: "));
let diasAtraso : number = Number(leitor.question("Digite a quantidade de dias de atraso: "));
let percPorDia : number = Number(leitor.question("Digite o percentual por dias de atraso: "));
let percFinal : number = diasAtraso * percPorDia;
let valorPagar : number = valorOriginal + valorOriginal * (percFinal/100);
console.log("O valor a pagar é " + valorPagar);
}

function Ex011(){
let x : number = 0;
let y : number = 0;
let pertence : boolean = false;

x = Number(leitor.question("Digite o valor de x: "));
y = Number(leitor.question("Digite o valor de y: "));
let z : number = Number(leitor.question("Digite o valor de z: "));

if(x < y){
for(;x < y; x++){
    if(x == z){
        pertence = true;
    }
}
if(pertence == true){
    console.log("z pertence ao intervalo entre x e y!");
}else console.log("z não pertence ao intervalo entre x e y!");
}
else if(x > y){
    for(;x > y; x--){
        if(x == z){
            pertence = true;
        }
    }
    if(pertence == true){
        console.log("z pertence ao intervalo entre x e y!");
    }else console.log("z não pertence ao intervalo entre x e y!");
    }else {
        if(x == z){
            console.log("z pertence ao intervalo entre x e y!");
        }else console.log("z não pertence ao intervalo entre x e y!");
    }
}

function Ex012(){

    let numero : number = Number(leitor.question("Digite o numero: "));

    if(numero % 2 == 0){
        console.log("O numero " + numero + " é par");
    }else console.log("O numero " + numero + " é impar");

}

function Ex013(){
    let mascFem : String;
do{
mascFem = leitor.question("Digite M para masculino ou F para feminino: ");
}while(mascFem != "M" && mascFem !="F");

let nome : String = leitor.question("Digite o seu nome: ");

if(mascFem == "M"){
    console.log("Seja bem vindo " + nome);
}
else if(mascFem == "F"){
    console.log("Seja bem vinda " + nome);
}
}

function Ex014(){

}
Ex014();








function Ex023(){
let nome : string;
let idade : number;
let menorNome : string = "";
let menorIdade : number = 0;

for(let i : number = 0; i < 3; i++){
    nome = leitor.question("Digite seu nome: ");
    idade = leitor.question("Digite sua idade: ");
    
    if(menorNome == ""){
        menorNome = nome;
        menorIdade = idade;
    }

    else if(idade < menorIdade){
        menorNome = nome;
        menorIdade = idade;
    }
    
}

console.log("Nome:" + menorNome + " Idade: " + menorIdade );

}


