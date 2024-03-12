alert ('Boas vindas ao jogo do número secreto');

let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo) + 1;
console.log(numeroSecreto);
//let chute = prompt ('Escolha um número entre 1 e 10');
let chute;
let tentativas = 1;

//enquanto chute não for igual ao n 5.
while (chute != numeroSecreto){
  chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
  if (chute == numeroSecreto) {
    //console.log('Isso aí!Você descobriu o número secreto(5)');
  }else{
    //alert('Você errou :(');
    //alert('O número secreto era '+ numeroSecreto + ' mas você escolheu ' + chute );
    if (chute > numeroSecreto){
      alert(`O número secreto é menor que ${chute}`);
    } else {
      alert(`O número secreto é maior que ${chute}`);
    }
    tentativas++;
  }
}
let palavraTentativa = tentativas > 1 ? 'tentatiivas' : 'tentativa';
alert(`Isso aí!Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}. `);



/*if (tentativas > 1){
  alert(`Isso aí!Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas. `);
}else {
  alert(`Isso aí!Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa. `);
}*/
//se chute for igual o número secreto
/*if (chute == numeroSecreto) {
    //console.log('Isso aí!Você descobriu o número secreto(5)');
    alert(`Isso aí!Você descobriu o número secreto ${numeroSecreto}`);
}else{
    //alert('Você errou :(');
    //alert('O número secreto era '+ numeroSecreto + ' mas você escolheu ' + chute );
    if (chute > numeroSecreto){
      alert(`O número secreto é menor que ${chute}`);
    } else {
      alert(`O número secreto é maior que ${chute}`);
    }
}*/



/*alert ('Boas vindas ao nosso site');
//let nome = 'Lua';
//let idade = 25;
let numedoDeVendas = 50;
let saldoDisponivel = 1000;
let mensagemDeErro = 'Erro! Preencha todos os campos.'
alert (mensagemDeErro)
let nome = prompt('Qual o seu nome?')
let idade = prompt('Qual sua idade?')

if (idade >= 18){
    alert('Pode tirar habilitação!')
}*/



/*
alert('Boas vindas ao jogo do número secreto');
// Adicione um console.log para verificar o valor de "chute" após a entrada do usuário
let chute = prompt('Escolha um número entre 1 e 10');
console.log('Valor do chute:', chute);

let numeroSecreto = 4;

// Adicione um console.log para verificar a comparação entre "chute" e "numeroSecreto"
console.log('Resultado da comparação:', chute == numeroSecreto);

if (chute == numeroSecreto) {
    alert('Acertou');
} else {
    // Adicione um console.log para verificar o valor de "numeroSecreto" quando o jogador erra
    console.log('Valor do número secreto:', numeroSecreto);
    alert('O número secreto era ' + numeroSecreto);
}*/



/*
Declara uma variável chamada diaDaSemana
let diaDaSemana = prompt("Qual é o dia da semana?");

// Verifica se a resposta é "Sábado" ou "Domingo"
if (diaDaSemana === "Sábado" || diaDaSemana === "Domingo") {
  // Exibe uma mensagem de bom fim de semana
  alert("Bom fim de semana!");
} else {
  // Exibe uma mensagem de boa semana
  alert("Boa semana!");
}*/



/*
Declara uma variável chamada numero
let numero = prompt("Digite um número:");

// Verifica se o número é positivo
if (numero > 0) {
  // Exibe um alerta informando que o número é positivo
  alert("O número é positivo.");
} else {
  // Exibe um alerta informando que o número é negativo
  alert("O número é negativo.");
}*/



/*
Declara uma variável chamada pontuacao
let pontuacao = prompt('Qual a sua pontuação? ');

// Verifica se a pontuação é maior ou igual a 100
if (pontuacao >= 100) {
  // Exibe uma mensagem de vitória
  alert("Parabéns, você venceu!");
} else {
  // Exibe uma mensagem de derrota
  alert("Tente novamente para ganhar.");
}*/



/*
Declara uma variável chamada saldo
let saldo = prompt('Informe o valor do seu saldo, com apenas números naturais');

// Cria uma mensagem usando uma template string
const mensagem = `Bem-vindo(a)! Seu saldo é de R$${saldo}.`;

// Exibe a mensagem
alert(mensagem);*/


/*
let nome = prompt('Informe seu nome: ');

alert('Seu nome é ' + nome);
*/



/* Declara uma variável chamada contador
let contador = 1;

// Loop while
while (contador <= 10) {
  // Exibe o contador
  console.log(contador);

  // Incrementa o contador
  contador++;
}*/



/* Declara uma variável chamada contador
let contador = 10;

// Loop while
while (contador >= 0) {
  // Exibe o contador
  console.log(contador);

  // Decrementa o contador
  contador--;
}*/



/*let numero = prompt('Digite um número inteiro')
// Loop while
while (numero >= 0) {
  // Exibe o contador
  console.log(numero);

  // Decrementa o contador
  numero--;
}*/



/*let numero = prompt('Digite um número inteiro')
// Loop while
let contador = 0;
while (contador <= numero) {
  // Exibe o contador
  console.log(contador);

  // Incrementa o contador
  contador++;
}*/



/* Exibe uma mensagem de boas-vindas
console.log("Bem-vindo(a) ao meu programa!");*/



/* Declara uma variável chamada nome
let nome = "Rodrigo";

// Exibe uma mensagem de boas-vindas
console.log(`Olá, ${nome}!`);*/



/*
Declara uma variável chamada nome
let nome = "Rodrigo";

// Exibe uma mensagem de boas-vindas
alert(`Olá, ${nome}!`);*/



/*
let linguagem = prompt('Qual a linguagem de programação que você mais gosta? ');

//Exibe a linguagem de programação que você mais gosta
console.log(`A linguagem de programação que você mais gosta é ${linguagem}.`);*/



/*Declara as variáveis
let valor1 = 10;
let valor2 = 20;

// Soma
let resultado = valor1 + valor2;

// Exibe a mensagem
console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}.`);*/



/* Declara as variáveis
let valor1 = 10;
let valor2 = 20;

// Subtração
let resultado = valor1 - valor2;

// Exibe a mensagem
console.log(`A diferença entre ${valor1} e ${valor2} é igual a ${resultado}.`);*/



/* Declara a variável idade
let idade = prompt("Qual é a sua idade?");

// Verifica se a idade é maior que 18
if (idade >= 18) {
  // Exibe a mensagem "Você é maior de idade."
  console.log("Você é maior de idade.");
} else {
  // Exibe a mensagem "Você é menor de idade."
  console.log("Você é menor de idade.");
}*/



/* Declara a variável numero
let numero = prompt("Digite um numero: ");

// Verifica se o numero e positivo
if (numero > 0) {
  // Exibe a mensagem "O numero e positivo."
  console.log("O numero e positivo.");
} else if (numero < 0) {
  // Exibe a mensagem "O numero e negativo."
  console.log("O numero e negativo.");
} else {
  // Exibe a mensagem "O numero e zero."
  console.log("O numero e zero.");
}*/



/* Declara uma variável contador
let contador = 1;

// Loop while
while (contador <= 10) {
  // Imprime o contador
  console.log(contador);

  // Incrementa o contador
  contador++;
}*/



/* Declara a variável nota
let nota = 9;

// Verifica se a nota é maior ou igual a 7
if (nota >= 7) {
  // Exibe a mensagem "Aprovado"
  console.log("Aprovado");
} else {
  // Exibe a mensagem "Reprovado"
  console.log("Reprovado");
}*/



/* Gera um número aleatório
let numeroAleatorio = Math.random();

// Exibe o número aleatório
console.log(numeroAleatorio);*/



/* Gera um número aleatório entre 1 e 10
let numeroAleatorio = Math.floor(Math.random() * 10) + 1;

// Exibe o número aleatório
console.log(numeroAleatorio);*/



/* Gera um número aleatório entre 1 e 1000
let numeroAleatorio = Math.floor(Math.random() * 1000) + 1;

// Exibe o número aleatório
console.log(numeroAleatorio);*/