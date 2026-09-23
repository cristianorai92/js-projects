const alunos =[
    {
        nome: "Samuel",
        idade: 26,
        notas:[7, 8, 9]
    },
    {
        nome: "João",
        idade: 20,
        notas: [5, 4, 3]
    },
    {
        nome: "Marta",
        idade: 22,
        notas: [8.3, 9.9, 6.1]
    },
    {
        nome: "Pedro",
        idade: 21,
        notas: [3.5, 6.8, 9.1]
    }
]

function calcularMedia(n1, n2, n3){
    const media = (n1 + n2 + n3) / 3

    return media.toFixed(2)
}

//Laço de repetição para calcular a média de cada aluno
for(let i = 0; alunos.length > i; i++){
   const aluno = alunos[i]
   
   const media = calcularMedia(aluno.notas[0], aluno.notas[1], aluno.notas[2])

    if(media >= 6){
        console.log(`${aluno.nome} a média é ${media} - APROVADO`)
        continue
    }

    console.log (`${aluno.nome} a media é ${media} - REPROVADO`)
}
