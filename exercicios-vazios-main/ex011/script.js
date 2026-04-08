// Pede ao usuário que digite um valor em dólares
// prompt() abre uma caixinha para digitar
// Number() converte o texto digitado em número
let dolar = Number (prompt("Digitie um valor em dólares: "));

// Define a taxa de câmbio fixa (1 dólar = 5.30 reais)
let taxaCambio = 5.30;

// Calcula o valor em reais multiplicando o valor em dólares pela taxa de câmbio
let real = dolar * taxaCambio;

// Mostra o resultado na tela usando alert()
// Concatenamos a mensagem com o valor calculado em reais
alert (" O valor em reais é: " +  " Dólares é equivalente a R$ " + real.toFixed(2));


