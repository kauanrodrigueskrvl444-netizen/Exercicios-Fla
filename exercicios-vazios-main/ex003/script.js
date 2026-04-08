// Pede ao usuário que digite um número
// prompt() abre uma caixinha para digitar
// Number() converte o valor digitado (texto) em número
let numero = Number(prompt ("Digite um numero"));


// Calcula o antecessor do número
// O antecessor é sempre o número - 1
let antecessor = numero - 1;

// Mostra o resultado na tela usando alert()
// Concatenamos a mensagem com o número digitado e seu antecessor
alert ("O antecessor de " + numero + " é " + antecessor);
