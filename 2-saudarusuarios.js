/*
Crie uma função chamada greetUsers que aceita um array de nomes e
exibe uma saudação para cada nome no console.

Programa desenvolvido por:
 - Luiz
 - Titiane
 - Samantha
 - Rafa
*/

function greetUsers(nomes){
    nomes.forEach(nome => {
        console.log(`Parabéns, ${nome}!!!`)
    })
}

greetUsers([ 'Luiz', 'Titiane', 'Sa', 'Rafa'])
