//Crie um algoritmo que calcule a área da parede
//O valor do pintor
//E quantidade de tinta necessária (Em baldes)

const altura = 3
const largura = 3
const valorPintor = 15
const rendimentoTinta = 12 // m² por balde


const area = altura * largura
const valor = area * valorPintor
const baldes = area / rendimentoTinta

console.log(`
    A area da parede é ${area}
    O valor do pintor é ${valor.toFixed(2)}
    A quantidade de baldes é ${Marth.ceil(baldes)}
    `)
