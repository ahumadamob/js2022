const sumar = (a, b) => {
    const suma = parseFloat(a) + parseFloat(b)    
    if(isNaN(suma)){
        return 'Indique números para ambos valores'
    }else{
        return suma
    }
}
const restar = (a, b) => a - b
const multiplicar = (a, b) => a * b
const dividir = (a, b) => {
    if(b==0){
        return 'División por cero'
    }else{
        return a / b
    }    
}

const operacion = (tipo) => {
    let vala = document.getElementById("elementoA").value
    let valb = document.getElementById("elementoB").value    
    var resultado
    switch(tipo){
        case '+':
            resultado = sumar(vala, valb)
            break
        case '-':
            resultado = restar(vala,valb)
            break
        case '*':
            resultado = multiplicar(vala, valb)
            break
        case '/':
            resultado = dividir(vala, valb)
            break
    }

    document.getElementById("resultado").value = resultado
}

const borrarCampos = () => {
    document.getElementById("elementoA").value = ""
    document.getElementById("elementoB").value = ""   
    document.getElementById("resultado").value = "" 
}