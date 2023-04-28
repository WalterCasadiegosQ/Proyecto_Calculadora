console.log("FUNCIONANDO");

function signo(signo){
    var input = document.getElementById("entrada");
    var operacion = input.value;
    console.log(operacion[operacion.length-1]);
    if(operacion[operacion.length-1]!=="+" && operacion[operacion.length-1]!=='-'
     && operacion[operacion.length-1]!=="*" && operacion[operacion.length-1]!=="/"
     && operacion[operacion.length-1]!==undefined){
        input.value= input.value+signo;
    }
}

function generico(entrada){
    var input = document.getElementById("entrada");
    input.value= input.value+entrada;
}

var resultado =0;
function igual(input){
    var operacion = input.value;
    console.log(operacion)
    var a = "";
    var b = "";
    var accion="";
    var cambio=0;
    console.log(operacion.length);
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
                console.log(operacion[i])
            }else{
                b =b + operacion[i];
                console.log(operacion[i]);
                console.log(operacion[i+1+"pusible nan"]);
                if(operacion[i+1]==="+" || operacion[operacion.length+1]==='-'
                || operacion[operacion.length+1]==="*" || operacion[operacion.length+1]==="/"
               ){
                    console.log("entro");
                    console.log(operacion[i+1]);
                    resultado=igual();
                    break
                    
                } 
            }
        }
    }
    

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

    return resultado;
}

function solucion(a, b, accion){

}


function limpiar(){
    var input = document.getElementById("entrada");
    input.value= "";
}