const data = [
    {
    nome: 'Roger Medeiros',
    sexo: 'M',
    salario: 3250,
    },
    {
    nome: 'Carolina Silva',
    sexo: 'F',
    salario: 1200,
    },
    {
    nome: 'Cristina Avila',
    sexo: 'F',
    salario: 8100,
    },
    {
    nome: 'Gustavo Hoffman',
    sexo: 'M',
    salario: 5200.35,
    },
    {
    nome: 'Eva Trindade',
    sexo: 'F',
    salario: 2501,
    },
    {
    nome: 'Andre Mathias',
    sexo: 'M',
    salario: 1750,
    },
    {
    nome: 'Joice Castro da Silva',
    sexo: 'F',
    salario: 3350.25,
    },
];

/*1. Imprima no console a quantidade de pessoas Total.*/

console.log(`O total de pessoas é: ${data.length}.`)

/*2. Imprima no console a quantidade de pessoas pessoas do sexo Feminino.*/

let listafiltradaF = []
for (let mulheres of data) {
    if (mulheres.sexo === 'F') {
        listafiltradaF.push(mulheres)
    }

}
console.log(`O número de mulheres é ${listafiltradaF.length}`)

/*3. Imprima no console a soma do salário de todas as pessoas.*/

const somaSalarios = data.reduce((acumulador, pessoa) => acumulador + pessoa.salario, 0)

console.log(`A soma dos salários é $${somaSalarios}`)

/*4. Imprima no console a média do salário de todas as pessoas.*/

const media = somaSalarios/ data.length

console.log(`A média dos salários é $${media.toFixed(2)}`)

/*5. Imprima no console a soma do salário de todos as pessoas do sexo Masculino*/

const homens = []

for (let homem of data) {
    if (homem.sexo === 'M') {
        homens.push(homem)
    }

}

const somaSalariosM = homens.reduce((acumulador, homem) => acumulador + homem.salario, 0)

console.log(`A soma de salários dos indivíduos do sexo masculino é: $${somaSalariosM}`)

/*6. Imprima no console a média do salário de todas as pessoas do sexo
Masculino*/

const media2 = somaSalariosM / homens.length

console.log(`A média dos salários dos indivíduos do sexo masculino é de $${media2.toFixed(2)}`)

/*7. Utilize a função Some, para descobrir se existe algum salário
superior a R$ 7.000, imprima verdadeiro no console caso exista, caso
contrário falso.*/

const salariomaior7k = data.some(pessoa => pessoa.salario > 7000);

console.log(salariomaior7k)

/*8. Utilize a função findIndex, para descobrir a posição da pessoa de nome 'Eva Trindade'.*/

const procurar = data.findIndex(pessoa => pessoa.nome === "Eva Trindade") 

console.log(procurar)

/*9. Utilize a função filter, para filtrar todas pessoas que o nome possua o sobrenome "Silva".*/

const filtro = data.filter(pessoa => pessoa.nome.includes('Silva'))

console.log(filtro)

/*10. Imprima os nomes utilizando o MAP*/

const mapear = data.map(pessoa => pessoa.nome)

console.log(mapear)