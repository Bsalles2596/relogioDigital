
function atualizarHoras (){

let display = document.querySelector('#display')

let agora = new Date()

let horario = zeroHorarios(agora.getHours()) + ':' + zeroHorarios(agora.getMinutes()) +':' + zeroHorarios(agora.getSeconds())

display.textContent = horario

}

function zeroHorarios(numero){
    if (numero < 10){
        numero = '0'+ numero
    }
    return numero
}

atualizarHoras()
setInterval(atualizarHoras, 1000)

console.log(horario)

