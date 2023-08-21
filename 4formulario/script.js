document.getElementById('formulario').addEventListener('submit', function (event) {
   event.preventDefault();

   const nome = document.getElementById('nome').value;
   const email = document.getElementById('email').value;
   const telefone = document.getElementById('telefone').value;

   const mensagem = 'Inscrição confirmada para: Nome: ' + nome +
      ' | E-mail: ' + email +
      ' | Telefone: ' + telefone;

   exibirMensagem(mensagem);
   limparFormulario();
});

function exibirMensagem(mensagem) {
   document.getElementById('mensagem').innerHTML = mensagem;
}

function limparFormulario() {
   document.getElementById('nome').value = '';
   document.getElementById('email').value = '';
   document.getElementById('telefone').value = '';
}
