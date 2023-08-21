function calcular() {
   const numero1 = parseFloat(document.getElementById('numero1').value);
   const numero2 = parseFloat(document.getElementById('numero2').value);
   const operacao = document.getElementById('operacao').value;
   let resultado = 0;

   if (operacao === 'adicao') {
      resultado = numero1 + numero2;
   } else if (operacao === 'subtracao') {
      resultado = numero1 - numero2;
   } else if (operacao === 'divisao') {
      resultado = numero1 / numero2;
   } else if (operacao === 'multiplicacao') {
      resultado = numero1 * numero2;
   }

   document.getElementById('resultado').innerHTML = "Resultado:" + resultado;
}
