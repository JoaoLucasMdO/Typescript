var leitor2 = require("readline-sync");
function Ex1() {
    var vetor1 = [];
    var vetor2 = [];
    var valor;
    var i = 0;
    do {
        valor = leitor2.question("Digite um número: ");
        if (valor != "") {
            vetor1[i] = Number(valor);
        }
        i++;
    } while (valor != "");
    for (var p = 0; p < vetor1.length; p++) {
        vetor2[p] = vetor1[p];
    }
    console.log(vetor2);
}
function Ex2() {
    var vetor1 = [];
    var vetor2 = [];
    var vetor3 = [];
    var valor = Number(leitor2.question("Digite o valor maximo dos vetores: "));
    for (var i = 0; i < valor; i++) {
        vetor1[i] = Number(leitor2.question("Digite o valor do vetor 1: "));
        vetor2[i] = Number(leitor2.question("Digite o valor do vetor 2: "));
        vetor3[i] = vetor1[i] + vetor2[i];
    }
    console.log(vetor3);
}
Ex2();
