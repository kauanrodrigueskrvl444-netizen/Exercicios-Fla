// 1. Pergunta ao usuário a largura do retângulo
let largura = prompt("Digite a largura do retângulo: ");

// 2. Pergunta ao usuário a altura do retângulo
let altura = prompt("Digite a altura do retângulo: ");

// 3. Converte os valores digitados de texto para número
largura = Number (largura);
altura = Number (altura);

// 4. Calcula a área do retângulo
let area = largura * altura;


// 5. Mostra o resultado para o usuário
alert ("A área do retângulo é: " + area);
