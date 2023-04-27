console.log("FUNCIONANDO");

function sumar(){
    
}

function restar(){
    const forma = document.getElementById("forma");
    let a = forma["operandoA"];
    let b = forma["operandoB"];
    let resultado = parseInt(a.value) - parseInt(b.value);
    if(isNaN(resultado)){
        resultado= "La operacion no incluye numeros"
    }

    document.getElementById("resultado").innerHTML = `Resultado: ${resultado}`;
}

function multiplicar(){
    const forma = document.getElementById("forma");
    let a = forma["operandoA"];
    let b = forma["operandoB"];
    let resultado = parseInt(a.value) * parseInt(b.value);
    if(isNaN(resultado)){
        resultado= "La operacion no incluye numeros"
    }

    document.getElementById("resultado").innerHTML = `Resultado: ${resultado}`;
}

function dividir(){
    const forma = document.getElementById("forma");
    let a = forma["operandoA"];
    let b = forma["operandoB"];
    let resultado = parseInt(a.value) / parseInt(b.value);
    if(isNaN(resultado)){
        resultado= "La operacion no incluye numeros"
    }

    document.getElementById("resultado").innerHTML = `Resultado: ${resultado}`;
}