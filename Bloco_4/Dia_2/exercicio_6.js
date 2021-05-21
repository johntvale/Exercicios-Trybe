// Descubra quantos valores ímpares existem no array e imprima o resultado.
// Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let quantidadeImpar = 0;

for(let count =0; count < numbers.length; count+=1){
    if(numbers[count]%2 !== 0 ){
        quantidadeImpar += 1;
    }
}
console.log(quantidadeImpar);
