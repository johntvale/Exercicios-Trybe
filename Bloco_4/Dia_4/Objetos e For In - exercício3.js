// Exibir as keys disponíveis utilizando For In

let info = {
	personagem: 'Margarida',
	origem: 'Pato Donald',
	nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

info['recorrente'] = 'sim';

for (let key in info){
	console.log(key);       // (key)exibe as keys disponíveis, info(key) exibe o conteúdo das keys.
}
