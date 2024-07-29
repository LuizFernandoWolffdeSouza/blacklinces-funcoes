/*
Crie uma função chamada reverseString que aceite uma string como parâmetro
e retorne a string invertida. Por exemplo, se a entrada for "hello", a
função deve retornar "olleh".

Dica: Para inverter uma string, você pode usar os métodos split('')
para dividir a string em um array de caracteres, reverse() para
inverter o array e join('') para juntar os caracteres de volta em uma string.

Programa desenvolvido por:
 - Luiz
 -  Titiiane
 - Samantha
 - Rafa
*/

function reverseString(word){
    let inverter = word.split('')
    let dividir = inverter.reverse('')
    let juntar = dividir.join('')
    return juntar
    
}

console.log(reverseString('hello world'))

// Pesquisa: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split