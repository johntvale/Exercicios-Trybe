// Criação de um objeto contendo várias strings, declara objeto e atribui dados utilizando sinal de =
// Variáveis internas recebem atribuição com sinal de :
// Se quiser atribuir outro Objeto internamente a atribuição também será com sinal de :
// console.table para exibir os dados de forma mais organizada.

let player = {
  name: 'Martha',
  lastName: 'Silva',
  age: 34,
  favoriteAlbuns:['banda1','banda2'],
  medals:{
    golden: 2,
    silver: 3,
  }
}

//NOTAÇÕES PARA ACESSAR PROPRIEDADES:
// Dot Notation - notação de ponto
console.log('Olá ' + player.name + ' ' + player.lastName);

// Bracket Notation - notação de colchetes
console.log('Olá ' + player['name'] + ' ' + player.lastName +'. Bem vindo ao nosso curso.');


// Acessar de forma dinamica, outra variável recebe a chave:
let variavelQualquer = 'name';
console.log('Olá ' + player[variavelQualquer] + ' ' + player.lastName +'. Bem vindo ao nosso curso.');


//adicionar novas entradas em um objeto já existente
player.favoriteAlbuns= ['barões da pisadinha', 'foo fighters'];
player['favoriteColor'] = 'Blue';

console.table(player)