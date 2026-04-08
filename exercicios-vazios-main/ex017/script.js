let valor1 = prompt("Digite o primeiro valor: ");
let valor2 = prompt("Digite o segundo valor: ");
let valor3 = prompt("Digite o terceiro valor: ");
let valor4 = prompt("Digite o quarto valor: ");

// 2. Converte os valores digitados para números
valor1 = Number (valor1);
valor2 = Number (valor2);
valor3 = Number (valor3);
valor4 = Number (valor4);

// 3. Soma todos os valores
let soma = valor1 + valor2 + valor3 + valor4;

// 4. Calcula a média simples (soma ÷ 4)
let media = soma / 4;

// 5. Mostra a média para o usuário
alert("A média dos quatro valores é: " + media);
