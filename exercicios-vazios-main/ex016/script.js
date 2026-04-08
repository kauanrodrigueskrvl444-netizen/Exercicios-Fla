// 1. Pergunta ao usuário um número
let numero = prompt("Digite um número para ver a tabuada: ");

// 2. Converte o texto digitado para número
numero = Number (numero);// agora podemos multiplicar

// 3. Cria um loop de 1 a 10
for (let i = 1; i <= 10; i++) {
     // 4. Calcula a multiplicação do número pelo contador i
     let resultado = numero * i;

       // 5. Mostra o resultado de cada multiplicação
       alert(numero + " x " + i + " = " + resultado);
}

