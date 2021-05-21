// Utilizando for , descubra qual o maior valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maior = numbers[0];
// inicia o teste na posição 1, pois ele será o número a ser testado.

for(let count=1;count<numbers.length;count+=1){
    if(numbers[count] > maior){
        maior = numbers[count];
    }
}
console.log(maior);

//teste de array iniciando a comparação pela 2 posição, nao precisa testar a primeira opção nela mesma.