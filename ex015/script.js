function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verificação os dados e tente novamente!')
    } else {
       var fsex = document.getElementsByName('radsex')
       var idade = ano - Number(fano.value)
       // res.innerHTML = `Idade calculada: ${idade}`
       var gênero = ''
       var img = document.createElement('img')
       img.setAttribute('id','foto')
       if(fsex[0].checked){
        gênero = 'Homem'
        if (idade >=0 && idade < 10) {
            // criança
            img.setAttribute('src', 'bebemenino.png')
        } else if (idade >= 10 && idade < 21) {
            // jovem
            img.setAttribute('src', 'jovemmenino.png')
        } else if (idade < 50){
            // adulto
            img.setAttribute('src', 'homemadulto.png')
        } else {
            // idoso
            img.setAttribute('src', 'idoso.png')
        }
       } else if (fsex[1].checked){
        gênero = 'Mulher'
        if (idade >=0 && idade < 10) {
            // criança
            img.setAttribute('src', 'bebemenina.png')
        } else if (idade >= 10 && idade < 21) {
            // jovem
            img.setAttribute('src', 'jovemmenina.png')
        } else if (idade < 50){
            // adulto
            img.setAttribute('src', 'mulheradulta.png')
        } else {
            // idoso
            img.setAttribute('src', 'idosa.png')
        }
       }
       res.style.textAlign = 'center'
       res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
       res.appendChild(img)
    }
}