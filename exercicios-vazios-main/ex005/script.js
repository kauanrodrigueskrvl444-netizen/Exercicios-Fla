// Pede ao usuário o primeiro valor
// prompt() abre uma caixinha para o usuário digitar algo
// Number() converte o valor digitado (que é texto) em número
let valor1 = Number(prompt("Digite o primeiro valor: "));

// Pede ao usuário o segundo valor
// Number() converte o texto digitado em número
let valor2 = Number(prompt("Digite o segundo valor: "));


// Calcula a multiplicação dos dois valores
// O operador * faz a multiplicaçã
let resultado = valor1 * valor2;


// Mostra o resultado na tela usando alert()
// Concatenamos a mensagem com o valor armazenado na variável "resultado"
alert("O resultado da multiplicação é: " + resultado);