// Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

function verificaPalindrome (palavra){
  return palavra.reverse();  
}

let palavra='palavra';
let resultado = verificaPalindrome(palavra);

if(resultado===palavra){
  console.log(true);
}
else {
  console.log(false);
}

// FALTA FINALIZAR