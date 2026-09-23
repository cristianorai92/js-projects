// Crie um algoritmo que calcule o valor total de uma locação
// Se a quantidade de dias for maior que 10 
// Aplicar um desconto de 50R$ no valor total

const dias = 12
const valorDias = 113.42

let calculo = dias * valorDias

if(dias > 10){
    calculo = calculo -50
}

console.log(`O valor total é ${calculo}`)