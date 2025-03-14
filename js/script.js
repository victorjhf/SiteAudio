function gerarSons(tempo){


    var EscolhaAudio = Math.floor(Math.random() * 15);

            
    var caminho = "Audio/"+EscolhaAudio+".mp3";


    var select = document.getElementById('tempo');
    var valorSelecionado = parseInt(select.value);


    var tempoAleatorio = Math.floor(Math.random() * (valorSelecionado - 10000 + 1) + 10000);

    console.log("Som será reproduzido após " + tempoAleatorio / 1000 + " Milisegundos. o Audio escolido foi: " + EscolhaAudio);

    setTimeout(function() {
        var audio = new Audio(caminho);
        audio.play();
        gerarSons(tempo)
    }, tempoAleatorio);

}



document.getElementById('btnEnviar').addEventListener('click', function() {
    
    var select = document.getElementById('tempo');
    var valorSelecionado = parseInt(select.value);

    gerarSons(valorSelecionado);
});
