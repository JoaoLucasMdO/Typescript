let leitor2 = require("readline-sync");

function Ex1(){
let vetor1 : Array<number> = [];
let vetor2 : Array<number> = [];
let valor : string;
let i : number = 0;

do{
valor = leitor2.question("Digite um número: ");
if(valor != ""){
vetor1[i] = Number(valor);}
i++;
}while(valor != "");

for(let p : number = 0; p < vetor1.length; p++){
    vetor2[p] = vetor1[p];
}
    console.log(vetor2);
}

function Ex2(){
    let vetor1 : Array<number> = [];
    let vetor2 : Array<number> = [];
    let vetor3 : Array<number> = [];
    let valor : number = Number(leitor2.question("Digite o valor maximo dos vetores: "));
     
    for(let i : number = 0; i < valor; i++ ){
        vetor1[i] = Number(leitor2.question("Digite o valor do vetor 1: "));
        vetor2[i] = Number(leitor2.question("Digite o valor do vetor 2: "));
        vetor3[i] = vetor1[i] + vetor2[i];
    }
    console.log(vetor3);
}

function Ex3(){

    
}

Ex2();