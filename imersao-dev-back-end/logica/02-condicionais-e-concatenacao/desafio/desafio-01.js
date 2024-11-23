function desafio01() {
    let diaDaSemana = prompt('Qual é o dia da semana?');
    diaDaSemana = diaDaSemana.toLowerCase();

    if (diaDaSemana == 'sabado' || diaDaSemana == 'sábado' || diaDaSemana == 'domingo') {
        alert('Bom fim de semana!');
    } else {
        alert('Boa semana!');
    }

    alert('Fim do desafio 01');
}