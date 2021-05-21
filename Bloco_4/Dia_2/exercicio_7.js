// Utilizando for , descubra qual o menor valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
menor = numbers[0];

for(let count = 1; count < numbers.length; count+=1){
    if (numbers[count]<menor){
        menor=numbers[count];
    }
}
console.log(menor);
