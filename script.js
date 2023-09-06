alert("Aqui vamos nós!")
let first = Number(prompt("Digite o primeiro numero"))
let second = Number(prompt("Digite o segundo numero"))

let final = first + second
alert(`A soma dos dois numeros é: ${final}`)

let fim = first - second
alert(`A subtração dos dois numeros é: ${fim}`)

let end = first * second
alert(`A multiplicação dos dois numeros é: ${end}`)

let endless = first / second
alert(`A divisão dos dois numeros é: ${endless}`)

let less = first % second
alert(`O resto da divisão dos dois numeros é: ${less}`)


if(final % 2 == 0){
   alert(`A soma dos dois numeros é par ${final}`)
}else {
   alert(`A soma dos dois numeros é impar ${final}`) 
}

if(first != second){
  alert(`Os numeros inseridos são diferentes`)
}else {
  alert(`Os numeros inseridos são iguais`) 
}