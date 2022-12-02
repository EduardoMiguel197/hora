function carregar() {
    var msg = window.document.getElementById('msg')
    var msg2 = window.document.getElementById('msg2')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var hora = 22
    msg.innerHTML = `Agora são ${hora} horas`
    
    if (hora >= 0 && hora < 5){
        img.src ='../assets/madruga.png'
        document.body.style.background = '#2d444a'
        msg2.innerHTML = '<b> Boa Madrugada!!<b> '

    } else if (hora >= 5 && hora < 12) {
        img.src ='../assets/manha.png'
        document.body.style.background = '#e9ceb0'
        msg2.innerHTML = '<b> Bom dia!!<b> '

    } else if (hora >= 12 && hora < 18) {
        img.src = '../assets/tarde.png'
        msg2.innerHTML = '<b> Boa Tarde!!<b> '
        document.body.style.background = '#e49554'

    } else {
        img.src = '../assets/noite.png'
        document.body.style.background = '#696969'
        msg2.innerHTML = '<b> Boa noite!!<b> '
    }
        
}
