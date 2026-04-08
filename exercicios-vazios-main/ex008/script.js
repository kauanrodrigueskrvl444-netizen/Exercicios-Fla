// Criamos uma variável chamada "valor1"
// prompt() mostra uma caixinha para o usuário digitar o primeiro número
// Number() transforma o que o usuário digitou (que é texto) em número
let valor1 = Number (prompt("Digite o primeiro valor: "));

// Criamos outra variável chamada "valor2"
// prompt() pede o segundo número
// Number() converte o texto em número
let valor2 = Number (prompt("Digite o segundo valor: "));

// Criamos uma variável chamada "resultado"
// Fazemos a subtração: valor1 menos valor2
let resultado = valor1 - valor2;

// Mostramos o resultado na tela usando alert()
// Concatenamos o texto com o resultado da subtração
alert("O resultado da subtração é: " + resultado)
