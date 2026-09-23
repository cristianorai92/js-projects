// Crie um algoritmo que calcule o valor total de uma locação
// Se a quantidade de dias for maior que 10 
// Aplicar um acréscimo de 20% no valor total se for menor que 5 dias
// Aplicar um desconto de 15% no valor total

const dias = 4
const valorDias = 135.33

let calculo = dias * valorDias

if(dias > 10){
    const desconto = calculo * 0.15

    calculo = calculo - desconto
}

if(dias < 5){
    const acrescimo = calculo * 0.20

    calculo = calculo + acrescimo
}

console.log (`O valor total é ${calculo.toFixed(2)}`)