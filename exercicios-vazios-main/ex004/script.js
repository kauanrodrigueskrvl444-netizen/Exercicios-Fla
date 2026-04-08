// Pede ao usuário que digite um número
// prompt() abre uma caixinha para digitar
// Number() converte o valor digitado (texto) em número
let numero = Number(prompt("Digite um número:"));

// Calcula o sucessor do número
// O sucessor é sempre o número + 1
let sucessor = numero + 1;

// Mostra o resultado na tela usando alert()
// Concatenamos a mensagem com o número digitado e seu sucessor
alert(sucessor + " é o sucessor de " + numero);