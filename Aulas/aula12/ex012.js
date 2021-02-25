var agora = new Date()

var hora = agora.getHours()

console.log(`Agora são exatamente ${hora} horas.`)

if(hora > 12 && hora < 18) {
    console.log('Boa tarde')
}else if(hora > 18 && hora < 23) {
    console.log('Boa noite')
}else if(5 > hora >= 0){
    console.log('Boa madrugada')
}else {
    console.log('Bom dia')
}