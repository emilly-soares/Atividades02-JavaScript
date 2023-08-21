const numDescobrir = Math.floor(Math.random() * 100) + 1;
let qtd = 0;

function verificarAdivinhacao() {
   const palpite = parseInt(document.getElementById('palpite').value);
   qtd++;

   if (palpite === numDescobrir) {
      exibirMensagem(`Você adivinhou o número ${numDescobrir} em ${qtd} tentativas.`);
   } else if (Math.abs(palpite - numDescobrir) <= 10) {
      exibirMensagem("Você está próximo!");
   } else {
      exibirMensagem("Você errou. Tente novamente.");
   }
}

function exibirMensagem(mensagem) {
   document.getElementById('mensagem').textContent = mensagem;
}
