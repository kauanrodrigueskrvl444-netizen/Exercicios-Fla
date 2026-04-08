// Pergunta os dois valores
let valor1 = Number (prompt("Digite o primeiro valor: "));
let valor2 = Number (prompt("Digite o segundo valor: "));


// Variável temporária para fazer a troca
let temp = valor1;
valor1 = valor2;
valor2 = temp;

// Mostra os valores trocados
alert("Depois da troca: \nValor 1: " + valor1 + "\nValor2: " + valor2);
