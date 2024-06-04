function calcularArea(lado: number): number{
    return lado * lado
}

const quadrado = calcularArea(2)
console.log(quadrado)

type situacao = 'aprovado' | 'reprovado' | 'recuperacao'

interface Aluno{
    nome: string
    mediaFinal: number | null
    situacao: situacao
    ra?: number
}

const aluno1:Aluno = {
    nome: "Aluno 1",
    mediaFinal: null,
    situacao: "aprovado"
}

if(aluno1.ra){
    const total = aluno1.ra / 2
}

const aluno2 = {
    nome: "teste",
    notas: [6,8,10,8],
    mediaFinal: 7
}

import PromptSync from 'prompt-sync'
const prompt = PromptSync()
const nome = prompt('Digite o seu nome ')
const notas:number[] = []
for (let i = 0; i < 4; i++) {
    const valor = prompt(`Digite a nota ${i+1} `)
    notas.push(Number(valor))
}

interface AlunoMedia {
    nome: string
    notas: number[]
    mediaFinal: number
}

function calcularMedia(nome: string,notas: number[]): AlunoMedia{
    const somaNotas = notas.reduce((acumulador,valorAtual) => acumulador + valorAtual, 0)
    return {
        nome,
        notas,
        mediaFinal: somaNotas / 4
    }
}

console.log(calcularMedia(nome,notas))