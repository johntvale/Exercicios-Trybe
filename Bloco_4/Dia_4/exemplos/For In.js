// Declaração do objeto Pizzas
let pizzas = {
  sabor: 'Palmito',
  preco: 39.90,
  bordaCatupiry: true
};

// Console.log(KEY) Exibe as chaves atribuídas no objeto pizzas
for (let key in pizzas){
  console.log(key);
}

// Console.log(PIZZAS) Exibe tudo por 3 vezes, conforme a quantidade de keys no objeto.
for (let key in pizzas){
  console.log(pizzas);
}

// COMANDO FOR IN USADO COM Bracket Notation. EXIBE TODOS OS KEYS DE UM OBJETO
let player = {
  name: 'Martha',
  lastName: 'Silva',
  age: 34,
  medals:{
    golden: 2,
    silver: 3,
  }
}

//exibe as atribuições de cada key dentro do objeto
for( let key in player){
  console.log(player[key]);
}