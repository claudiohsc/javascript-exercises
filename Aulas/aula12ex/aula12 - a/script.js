var texto_hora = document.querySelector('div#hora');
var img = document.getElementById('paisagem');
var msg = document.getElementById('msg')

var hora = new Date().getHours();
var minutos = new Date().getMinutes();

texto_hora.innerHTML = `<p>Agora são ${hora} horas e ${minutos} minutos.</p>`;

function horaAtual(){
    if (hora >= 5 && hora < 12){
        img.src = 'imagens/paisagem-manha.jpg';
        msg.innerHTML = 'Bom dia!!';
        document.body.style.background = '#bca91e'
    }else if (hora >= 12 && hora < 17){
        img.src = 'imagens/paisagem-tarde.jpeg';
        msg.innerHTML = 'Boa tarde!!';
        document.body.style.background = '#8bbbc5'
    }else if (hora >= 17 && hora <= 18){
        img.src = 'imagens/paisagem-tarde-fim.jpg';
        msg.innerHTML = 'Boa noite!!';
        document.body.style.background = '#ffac66'
    } else if (hora > 18 && hora <= 22){
        img.src = 'imagens/paisagem-noite-cedo.jpeg';
        msg.innerHTML = 'Boa noite!!';
        document.body.style.background = '#5b6086'
    } else if(hora > 22 || hora < 5 || hora == 0) {
        img.src = 'imagens/paisagem-madrugada.jpeg';
        msg.innerHTML = 'Boa madrugada';
        document.body.style.background = '#1e1d18'
    }
}
