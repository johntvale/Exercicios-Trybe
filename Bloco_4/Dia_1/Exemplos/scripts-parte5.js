let situacaoPessoa = "aprovada";

switch (situacaoPessoa){
  case 'aprovada':
    console.log("Parabéns! Você foi aprovada(o)!");
    break;

  case 'lista':
    console.log("Você está na nossa lista de espera.");
    break;

  case 'reprovada':
    console.log("Você foi reprovada(o).");
    break;

  default:
    console.log("Não se aplica.");
    break;
}
