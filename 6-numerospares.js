/*
Crie uma função chamada getEvenNumbers que aceite um array de números e
retorne um novo array contendo apenas os números pares do array original.

Dica: Para filtrar os números pares, você pode usar o operador módulo (%).
Um número é par se o resto da divisão desse número por 2 é zero (num % 2 === 0).
Tente utilizar o método filter para criar um novo array contendo apenas os
números que atendem a essa condição.

Programa desenvolvido por:
 - Titi
 - Luiz
 - Samantha
 - Rafa
*/

function getEvenNumbers(num){
  let par =  num.filter(numero => (numero % 2 == 0))
  return par
}

console.log(`${getEvenNumbers([2, 4, 7, 14, 8])}`)