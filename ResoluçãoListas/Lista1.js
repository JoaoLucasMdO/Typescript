var leitor = require("readline-sync");
function Ex01() {
    var nome = leitor.question("Digite seu nome completo: ");
    var lista = nome.split(" ");
    for (var i = 0; i < lista.length; i++) {
        console.log(lista[i]);
    }
}
function Ex02() {
    var nome = leitor.question("Digite seu nome: ");
    var end = leitor.question("Digite seu endereço: ");
    var idade = leitor.question("Digite sua idade: ");
    console.log("".concat(nome, " mora no endere\u00E7o: ").concat(end, " e tem ").concat(idade, " anos."));
}
function Ex03() {
    var idade = leitor.question("Digite sua idade: ");
    var idadeDias = idade * 365;
    console.log("Você tem " + idadeDias + " de idade em dias");
}
function Ex04() {
    var numero = Number(leitor.question("Digite um número: "));
    console.log("O n\u00FAmero \u00E9 ".concat(numero, ", seus sucessores s\u00E3o ").concat(numero + 1, " e ").concat(numero + 2, ", seus antecessores s\u00E3o ").concat(numero - 1, " e ").concat(numero - 2));
}
function Ex05() {
    var salario = Number(leitor.question("Digite o salario: "));
    var percentual = Number(leitor.question("Digite o percentual de aumento: "));
    var salarioFinal = salario + salario * (percentual / 100);
    console.log("Seu salario agora é: " + salarioFinal);
}
function Ex06() {
    var numDolar = Number(leitor.question("Digite o dinheiro em dolar:"));
    var numReal = numDolar * 5.47;
    console.log(numDolar + " dolar em real é: " + numReal.toFixed(2));
}
function Ex07() {
    var x = leitor.question("Digite o valor de x: ");
    var y = leitor.question("Digite o valor de y: ");
    var a;
    a = x;
    x = y;
    y = a;
    console.log("X: " + x + "|" + "Y: " + y);
}
function Ex08() {
    var valLitro = Number(leitor.question("Valor do litro: "));
    var valAbastecer = Number(leitor.question("Quanto a abastecer: "));
    var valAbastecido = valAbastecer / valLitro;
    console.log("Valor abastecido: " + valAbastecido.toFixed(2));
}
function Ex09() {
    var kmLitro = 12;
    var kmInicial = Number(leitor.question("Digite o km Inicial: "));
    var kmFinal = Number(leitor.question("Digite o km Final: "));
    var ltConsumido = Number(leitor.question("Digite quantos litros foram gastos: "));
    var kmPercorrido = kmFinal - kmInicial;
    var media = kmPercorrido / ltConsumido;
    console.log("A média de consumo é: " + media);
}
function Ex010() {
    var valorOriginal = Number(leitor.question("Digite o valor inicial da dívida: "));
    var diasAtraso = Number(leitor.question("Digite a quantidade de dias de atraso: "));
    var percPorDia = Number(leitor.question("Digite o percentual por dias de atraso: "));
    var percFinal = diasAtraso * percPorDia;
    var valorPagar = valorOriginal + valorOriginal * (percFinal / 100);
    console.log("O valor a pagar é " + valorPagar);
}
function Ex011() {
    var x = 0;
    var y = 0;
    var pertence = false;
    x = Number(leitor.question("Digite o valor de x: "));
    y = Number(leitor.question("Digite o valor de y: "));
    var z = Number(leitor.question("Digite o valor de z: "));
    if (x < y) {
        for (; x < y; x++) {
            if (x == z) {
                pertence = true;
            }
        }
        if (pertence == true) {
            console.log("z pertence ao intervalo entre x e y!");
        }
        else
            console.log("z não pertence ao intervalo entre x e y!");
    }
    else if (x > y) {
        for (; x > y; x--) {
            if (x == z) {
                pertence = true;
            }
        }
        if (pertence == true) {
            console.log("z pertence ao intervalo entre x e y!");
        }
        else
            console.log("z não pertence ao intervalo entre x e y!");
    }
    else {
        if (x == z) {
            console.log("z pertence ao intervalo entre x e y!");
        }
        else
            console.log("z não pertence ao intervalo entre x e y!");
    }
}
function Ex012() {
    var numero = Number(leitor.question("Digite o numero: "));
    if (numero % 2 == 0) {
        console.log("O numero " + numero + " é par");
    }
    else
        console.log("O numero " + numero + " é impar");
}
function Ex013() {
    var mascFem;
    do {
        mascFem = leitor.question("Digite M para masculino ou F para feminino: ");
    } while (mascFem != "M" && mascFem != "F");
    var nome = leitor.question("Digite o seu nome: ");
    if (mascFem == "M") {
        console.log("Seja bem vindo " + nome);
    }
    else if (mascFem == "F") {
        console.log("Seja bem vinda " + nome);
    }
}
Ex013();
function Ex023() {
    var nome;
    var idade;
    var menorNome = "";
    var menorIdade = 0;
    for (var i = 0; i < 3; i++) {
        nome = leitor.question("Digite seu nome: ");
        idade = leitor.question("Digite sua idade: ");
        if (menorNome == "") {
            menorNome = nome;
            menorIdade = idade;
        }
        else if (idade < menorIdade) {
            menorNome = nome;
            menorIdade = idade;
        }
    }
    console.log("Nome:" + menorNome + " Idade: " + menorIdade);
}
