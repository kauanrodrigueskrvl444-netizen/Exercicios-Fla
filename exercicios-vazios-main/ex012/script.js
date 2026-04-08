// Criando uma variável com a taxa fixa (1 dólar = 5.30 reais)
let taxa = 5.30;

// Pergunta o valor em reais para o usuário
let reais = prompt("Digite um valor em reais: ");


// Converte o valor digitado (texto) para número
reais = parseFloat(reais);

// Faz a conversão para dólar
let dolar = reais / taxa;

// Exibe o resultado para o usuário
alert("O valor em dólares é: " + dolar.toFixed(2));


