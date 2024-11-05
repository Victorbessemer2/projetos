function ingredientes(status){

    return status
}

function massa(receberingredientes){

    if(receberingredientes == true){
        return "receita carregada"
    }

}

//console.log(massa(ingredientes(false)))
//----------minhas classes

function ligar(status){
    return status
}

function ventilador(verificar){
        if(verificar == true){
            return "funcionado"
        } else {
            return "Desligado"
        }

}

//console.log(ventilador(ligar(true)))
//

function ligarComputador(status){
    return status
}

function Computador(verificar){
    if(verificar == true){
        return "Ligado"
    } else {
        return "Desligado"
    }
}

//console.log(Computador(ligarComputador(true)))

function movimento(status){
    return status
}
function elevador(verificar, andar){
    if (verificar==true){

        for(let i=0;i<5;i++){
            if(andar==i){
                return "abre as portas"
            }
        }
    } else {
        return "portas fechadas"
    }
}
console.log(elevador(movimento(true)))