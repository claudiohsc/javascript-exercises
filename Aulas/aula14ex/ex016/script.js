function contar() {
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var contagem = document.getElementById('contagem')
    

    if(inicio.value.length == 0 || fim.value.length == 0){
        alert('ERRO! Está faltando dados para a contagem.')
    }

    if(passo.value == 0) {
        alert('Contagem de passos não pode ser 0. Começando do 1...')
        passo.value = 1
    }

    contagem.innerHTML = `Contando: <br>`
    if(Number(inicio.value) < Number(fim.value)){
        while(Number(inicio.value) <= Number(fim.value)) {

            contagem.innerHTML += `${inicio.value} 👉`
            inicio.value = Number(inicio.value) + Number(passo.value)
        }
    }else {
        while(Number(inicio.value) != Number(fim.value)) {

            contagem.innerHTML += `${inicio.value} 👉`
            inicio.value = Number(inicio.value) - Number(passo.value)
        }
    }
    contagem.innerHTML += 'FIM'
}