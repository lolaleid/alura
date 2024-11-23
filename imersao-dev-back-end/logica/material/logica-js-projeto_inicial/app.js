alert('Boas vindas ao jogo do número secreto');
let numeroMaximo = 100;
let numeroSecreto = parseInt(Math.random() * (numeroMaximo + 1));
let chute = numeroSecreto + 1;
let tentativas = 0;
console.log(numeroSecreto);

while (chute != numeroSecreto) {
    chute = prompt('Escolha um número entre 1 e 10');
    tentativas++;

    if (chute > numeroSecreto) {
        alert('Dica: O número secreto é menor');
    } else {
        alert('Dica: O número secreto é maior');
    }



}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';

alert(`Isso ai! Você descobriu o número secreto : ${numeroSecreto}, e vocé acertou com apenas ${tentativas} ${palavraTentativa}`); //template string
//alert('Isso ai! Vocé descobriu o número secreto : ' + numeroSecreto); //concatenacao

