// 1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:

// criar uma variável "n" para receber o número de lados de um quadrado.
let n=10;
let listaDeAsteriscos=[];

// criar um comando For para receber '*' na variavel 'listaDeAsteriscos' e criar uma lista de '*'.
for(let index=0; index<n; index+=1){	
	if(n>1){
		listaDeAsteriscos=listaDeAsteriscos+'*';
	} else{
		console.log('número menor ou igual a 1.');
		break;
	}
}

//comando for para imprimir 'listaDeAsteriscos' por 'n' vezes. Formando um quadrado na tela.
for(let index=0; index<n; index+=1){	
console.log(listaDeAsteriscos);
}
