/*
Crie uma função chamada getOddNumbers que aceite um array de números e retorne
um novo array contendo apenas os números ímpares do array original.

Dica: Para filtrar os números ímpares, você pode usar o operador módulo (%).
Um número é ímpar se o resto da divisão desse número por 2 é diferente de zero
(num % 2 !== 0). Você também pode usar o método filter para criar um novo
array contendo apenas os números que atendem a essa condição.

Programa desenvolvido por:
 - Titi
 - Luiz
 - Samantha
 - Rafa
*/

function getOddNumbers(num){
   let impar = num.filter((numero) => numero % 2 !== 0)
   return impar

    
    
}


console.log(`${getOddNumbers([1, 2, 3, 4,5])}`)