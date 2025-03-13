function gerarSons(tempo){

            
    var caminho = "Audio/1.mp3";


    var select = document.getElementById('tempo');
    var valorSelecionado = parseInt(select.value);


    var tempoAleatorio = Math.floor(Math.random() * (valorSelecionado - 10000 + 1) + 10000);

    console.log("Som será reproduzido após " + tempoAleatorio / 1000 + " minutos. o numero escolido foi: " + valorSelecionado);

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

   /* var caminho = "Audio/1.mp3";


    var select = document.getElementById('tempo');
    var valorSelecionado = parseInt(select.value);


    var tempoAleatorio = Math.floor(Math.random() * (valorSelecionado - 10000 + 1) + 10000);

    console.log("Som será reproduzido após " + tempoAleatorio / 1000 + " minutos. o numero escolido foi: " + valorSelecionado);

    setTimeout(function() {
        var audio = new Audio(caminho);
        audio.play();
    }, tempoAleatorio);*/
});






/* var caminho = "Audio/1.mp3";

document.getElementById('btnEnviar').addEventListener('click', function() {
    var audio = new Audio(caminho);
    audio.play();
});*/