/*
Crie uma função chamada findMax que aceita um array de números e retorne
o maior número do array.

Programa desenvolvido por:
 - Titi
 - Luiz
 - Samantha
 - Rafa
*/

function findMax(vetor){
    let total = vetor[0]
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] > total) {
            total = vetor[i]
            
        }
        
    }
    return total
}

console.log(findMax([2, 8, 3, 11, 5]))