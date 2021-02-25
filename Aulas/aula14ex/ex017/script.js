function gerar() {
    var num = document.getElementById('numero').value
    var tab = document.getElementById('tab')
    if(num.length == 0) {
        alert('ERRO! Digite um número válido.')
    }else {
        Number(num)
    }
    tab.innerHTML = ''
    for(var c = 0; c <= 10; c++) {
        let item = document.createElement('option')
        item.text = `${num} x ${c} = ${num*c}`
        tab.appendChild(item)
    }

}