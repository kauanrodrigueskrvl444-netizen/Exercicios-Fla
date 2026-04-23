let aprendizado = Number(prompt("Digite um numero para descobrir oque você aprendeu?"))

function seSenao() {
    let perguntaUsuario = prompt(`Você estudou no feriado?
      sim ou não
`)
    if (perguntaUsuario.toLocaleLowerCase() == "sim") {
        alert("Parabens, você é o cara!")
        return
    }
    alert("Miguelou")

}

function daPraCriarUmaFuncaoDentroDeoutraFuncao() {
    function teste() {
        alert("teste")
    }
    teste()
}

function soma(primeiroNumero, segundoNumero) {
    return primeiroNumero + segundoNumero

}

function perguntaNumero() {
    let primeiroNumero = Number(prompt("Digite o primeiro numero"))
    let segundoNumero = Number(prompt("Digite o segundo numero"))

    alert(soma(primeiroNumero, segundoNumero))
}

switch (aprendizado) {
    case 1:
        seSenao()
        break;
    case 2:
        daPraCriarUmaFuncaoDentroDeoutraFuncao()
        break;
    case 3:
        perguntaNumero()
        break;
    default:
        alert("Não existe esse caso")
        break;
}













