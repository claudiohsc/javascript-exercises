function verificar(){
    var data = new Date().getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if(fano.value.length == 0 || fano.value > data){
        alert('ERRO! Verifique os seus dados novamente')
    }
    
    var fsex = document.getElementsByName('radsex')
    var idade = data - Number(fano.value)
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')

    if(fsex[0].checked) {
        genero = 'Homem'
        if(idade >=0 && idade < 10) {
            //criança
            img.setAttribute('src', 'imagens/crianca-homem.png')
        }else if(idade < 21) {
            //Jovem
            img.setAttribute('src', 'imagens/jovem-homem.png')
        }else if(idade < 50) {
            //Adulto
            img.setAttribute('src', 'imagens/homem-adulto.png')
        }else {
            //Idoso
            img.setAttribute('src', 'imagens/idoso-homem.png')
        }
    }else if(fsex[1].checked) {
        genero = 'Mulher'
        if(idade >=0 && idade < 10) {
            //criança
            img.setAttribute('src', 'imagens/crianca-mulher.png')
        }else if(idade < 21) {
            //Jovem
            img.setAttribute('src', 'imagens/jovem-mulher.png')
        }else if(idade < 50) {
            //Adulto
            img.setAttribute('src', 'imagens/mulher-adulta.png')
        }else {
            //Idosa
            img.setAttribute('src', 'imagens/idosa-mulher.png')
        }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos de idade.`
    res.appendChild(img)
}