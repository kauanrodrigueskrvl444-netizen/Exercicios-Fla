// 1. Pergunta para o usuário o valor do lado do quadrado
// prompt sempre retorna texto (string)
let lado = prompt("Digite o valor do lado do quadrado: ");

// 2. Converte o valor digitado (texto) para número
// Number() transforma texto em número
lado = Number (lado); // agora podemos fazer cálculos

// 3. Calcula a área do quadrado
// Área = lado × lado
let area = lado * lado;

// 4. Mostra o resultado para o usuário
// alert() exibe uma mensagem na tela
alert("A área do quadrado é: " + area);
