function gerarSons(tempo){


    var EscolhaAudio = Math.floor(Math.random() * 15);

            
    var caminho = "Audio/"+EscolhaAudio+".mp3";


    var select = document.getElementById('tempo');
    var valorSelecionado = parseInt(select.value);


    var tempoAleatorio = Math.floor(Math.random() * (valorSelecionado - 10000 + 1) + 10000);

    setTimeout(function() {
        var audio = new Audio(caminho);
        audio.play();
        gerarSons(tempo)
    }, tempoAleatorio);

}

document.getElementById('btnEnviar').addEventListener('click', function() {

    // Pega o botão btnEnviar
    var botaoEnviar = document.getElementById('btnEnviar');

    botaoEnviar.style.backgroundColor = "green";
    botaoEnviar.style.color="white"
    
    var select = document.getElementById('tempo');
    var valorSelecionado = parseInt(select.value);
    setTimeout(function() {
        botaoEnviar.style.backgroundColor = "";
        botaoEnviar.style.color=""
      }, 3000);

    gerarSons(valorSelecionado);
});
