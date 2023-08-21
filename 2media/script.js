function calcularMedia(notas) {
   let soma = 0;
   for (let i = 0; i < notas.length; i++) {
      soma += parseFloat(notas[i]);
   }
   return soma / notas.length;
}

function verificarStatus(media) {
   if (media >= 7) {
      return "Aprovado";
   } else if (media <= 7) {
      return "Reprovado";
   }
}

function main() {
   const notasInput = document.getElementById('notas').value;
   const notasArray = notasInput.split(',').map(nota => parseFloat(nota));
   const media = calcularMedia(notasArray);
   const status = verificarStatus(media);
   document.getElementById('resultado').innerHTML = 'Média: ' + media.toFixed(2);
   document.getElementById('status').innerHTML = 'Status: ' + status;
}
