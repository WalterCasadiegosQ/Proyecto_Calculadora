console.log("FUNCIONANDO");

function generico(){
    var input = document.getElementById("entrada");
    input.value= input.value+"+";
}

function sumar(){
    var input = document.getElementById("entrada");
    input.value= input.value+"+";
}

function restar(){
    var input = document.getElementById("entrada");
    input.value= input.value+"-";
}

function multiplicar(){
    var input = document.getElementById("entrada");
    input.value= input.value+"*";
}

function dividir(){
    var input = document.getElementById("entrada");
    input.value= input.value+"/";
}

function cero(){
    var input = document.getElementById("entrada");
    input.value= input.value+"0";
}
function uno(){
    var input = document.getElementById("entrada");
    input.value= input.value+"1";
}
function dos(){
    var input = document.getElementById("entrada");
    input.value= input.value+"2";
}
function tres(){
    var input = document.getElementById("entrada");
    input.value= input.value+"3";
}
function cuatro(){
    var input = document.getElementById("entrada");
    input.value= input.value+"4";
}
function cinco(){
    var input = document.getElementById("entrada");
    input.value= input.value+"5";
}
function seis(){
    var input = document.getElementById("entrada");
    input.value= input.value+"6";
}
function siete(){
    var input = document.getElementById("entrada");
    input.value= input.value+"7";
}
function ocho(){
    var input = document.getElementById("entrada");
    input.value= input.value+"8";
}
function nueve(){
    var input = document.getElementById("entrada");
    input.value= input.value+"9";
}


function igual(){
    const input = document.getElementById("entrada");
    var operacion = input.value;
    console.log(operacion)
    var a = "";
    var b = "";
    var accion="";
    var cambio=0;
    for(let i=0; i<operacion.length; i++){
          
        if(operacion[i]==="+"){
            accion= "+";
            cambio=1;
        }else if(operacion[i]==="-"){
            accion= "-";
            cambio=1;
        }else if(operacion[i]==="*"){
            accion= "*";
            cambio=1;
        }else if(operacion[i]==="/"){
            accion= "/";
            cambio=1;
        }
        else{
            if(cambio==0){
                a =a + operacion[i]; 
            }else{
                b =b + operacion[i]; 
            }
        }
    }
    var resultado =0;

    if(accion==="+"){
        resultado = parseInt(a) + parseInt(b)
    }
    if(accion==="-"){
        resultado = parseInt(a) - parseInt(b)
    }
    if(accion==="*"){
        resultado = parseInt(a) * parseInt(b)
    }
    if(accion==="/"){
        resultado = parseInt(a) / parseInt(b)
    }

    console.log(resultado)
        input.value= resultado.toString();
}