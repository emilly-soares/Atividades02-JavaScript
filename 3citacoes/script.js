const citações = [
   "Creio no riso e nas lágrimas como antídotos contra o ódio e o terror - Charles Chaplin",
   "Seja como for o que penses, creio que é melhor dizê - lo com boas palavras - William Shakespeare",
   "Eu acredito no amor. Eu creio que pode existir alguma chance e eu sempre acho que pode ser diferente. Talvez essa seja a explicação de todas decepções - Pequena Sereia",
   "Eu creio que um dos princípios essenciais da sabedoria é o de se abster das ameaças verbais ou insultos - Maquiavel",
   "Creio que tenho prova suficiente de que falo a verdade: a pobreza - Sócrates",
   "Creio que quase sempre é preciso um golpe de loucura para se construir um destino - Marguerite Yourcenar",
   "Por mim, creio que estamos mortos há muito tempo: morremos no exato momento em que deixamos de ser úteis - Jean-Paul Sartre",
   "Eu creio haver corações que poderiam cortar diamantes - Emanuel Wertheimer"

];

function gerarCitaçãoAleatoria() {
   const índiceAleatório = Math.floor(Math.random() * citações.length);
   return citações[índiceAleatório];
}

function exibirCitação() {
   const citação = gerarCitaçãoAleatoria();
   document.getElementById('citação').innerHTML = citação;
}
