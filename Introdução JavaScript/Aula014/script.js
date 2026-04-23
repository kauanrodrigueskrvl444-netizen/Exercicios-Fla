/* let nome = "Rafael"

alert(nome.toLowerCase())

alert(nome.toUpperCase()) */

/* let dinheiro = 5000
alert(dinheiro.toLocaleString( 'pt-br', {
    style: 'currency',
    currency: 'BRL',
})) */

/* let frutas = "Laranja"
alert(frutas.length) */

let valor = Number(prompt("Digite um valor: "))

let formatado = valor.toLocaleString( 'pt-br',{
    style: 'currency',
    currency: 'BRL',
})

alert(formatado)














