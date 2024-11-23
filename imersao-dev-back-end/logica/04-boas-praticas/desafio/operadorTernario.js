function operadorTernario() {

    let palavraPessoa = "";
    let quantidadePessoas = prompt("Quantas pessoas?");

    palavraPessoa = quantidadePessoas == 1 ? "pessoa" : "pessoas";
    console.log(quantidadePessoas + " " + palavraPessoa);
    // if(quantidadePessoas == 1){
    //     palavraPessoa = "pessoa";
    // }else{
    //     palavraPessoa = "pessoas"
    // }


}