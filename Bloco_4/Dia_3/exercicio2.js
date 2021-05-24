// 2- criar um triangulo retângulo de asteriscos com 5 asteriscos de Base, por exemplo.

//criar uma variável 'n' para receber o tamanho da base do triangulo;
//criar uma viarável para receber * e criar formato do triangulo.
let n=10;
let listaDeAsteriscos=[];

// comando for para receber * e imprimir linha a linha em uma lista, criando o triangulo.
for(let index=0; index<n; index+=1){

	//verifica se é maior que 1 para poder executar o código.
	if(n>1){
		listaDeAsteriscos=listaDeAsteriscos+'*';
		console.log(listaDeAsteriscos);
	}
	else{
		console.log('Número menos ou igual a 1.');
		break;
	}
}
