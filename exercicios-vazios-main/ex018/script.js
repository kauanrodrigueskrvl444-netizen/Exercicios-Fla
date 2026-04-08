// 1. Pergunta ao usuário o salário
let salario = prompt("Digite o valor do salário: ");

// 2. Pergunta ao usuário o valor do bônus
let bonus = prompt("Digite o valor do bônus: ");

// 3. Converte os valores digitados de texto para número
salario = Number (salario);
bonus = Number (bonus);

// 4. Calcula o valor total somando salário + bônus
let total = salario + bonus;

// 5. Mostra o valor total para o usuário
alert("O valor total do salário mais o bônus é: " + total);