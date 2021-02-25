let numeros = []
let num = document.getElementById('num').value
let caixa = document.getElementById('caixa')
let final = document.getElementById('final')

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function inLista(n, lista){
    if(lista.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}


function adicionar(){
    if(isNumero(num) && !inLista(num, numeros)){
        Number(num)
        numeros.push(num)
        var valor = document.createElement('option')
        valor.text = `Valor ${num} foi adicionado.`
        caixa.appendChild(valor)
        final.innerHTML = ''
    }else{
        alert('ERRO! Número inválido ou já foi encontrado na lista.')
    }    
}

function finalizar(){
    if(numeros.length ==  0){
        alert('ERRO! Adicione valores antes de finalizar.')
    }else{
        var analise = document.createElement('p')
        var max = Math.max(...numeros),
            min = Math.min(...numeros)
            soma = 0
        for(var c = 0; c < numeros.length; c++){
            soma += Number(numeros[c])
        }
        analise.innerHTML = `Ao todo, temos ${numeros.length} números cadastrados. <br>
        O maior valor foi ${max} e o menor foi ${min}. <br>
        Somando todos os valores, temos ${soma}. <br>
        A média dos valores digitados é ${soma / numeros.length}.`
        final.appendChild(analise)
    }
    
}