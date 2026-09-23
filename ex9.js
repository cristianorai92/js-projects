const user = {
    nome: "Cristiano",
    idade: 17,
    email: "cristiano@gmail.com",
    brasileiro: true,
    genero: "masculino"
}

if(user.idade >= 18 && user.genero === "masculino"){
    console.log(`(user.nome) Deve se alistar!`)
    return
}

console.log(`Não precisa se alistar!`)

const filmes = [
    {
        título: "Vingadores",
        ano: 2012,
        genero: "Ação",
        paraMaiorDeIdade: false
    },
    {
        titulo: "Tropa de Elite",
        ano: 2007,
        genero: "Ação",
        paraMaiorDeIdade: true
    }
]
