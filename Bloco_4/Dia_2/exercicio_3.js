// calcule e imprima a média aritmética dos valores contidos no array;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma=0, media=0;

for(let count=0; count < numbers.length; count+=1){
    soma+=numbers[count];
}

media=soma/numbers.length;
console.log(media);
