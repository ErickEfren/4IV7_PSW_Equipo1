function validarn(e){
    var teclado = (document.all)? e.keyCode : e.which;
    if(teclado == 8) return true;
    var patron = /[0-9\d .]/;
    var codigo = String.fromCharCode(teclado);
    return patron.test(codigo);
}
function validare(e){
    var teclado = (document.all)? e.keyCode : e.which;
    if(teclado == 8) return true;
    var patron = /[0-9]/;
    var codigo = String.fromCharCode(teclado);
    return patron.test(codigo);
}
function horasExtra(){
    var todoesvalido = true;
    var sueldo = parseFloat(document.getElementById("sueldo").value);
    var horas = parseInt(document.getElementById("horas").value);
    var resultado = "";
    if(horas<=40){
        resultado += "Sueldo adquirido por horas normales: $" + sueldo + "\n";
        resultado += "Sueldo adquirido por horas extras comunes: $0 \n";
        resultado += "Sueldo adquiridos por horas extras >8: $0";
        document.getElementById("output").innerText = resultado;
    }
    else if(horas>40 && horas<=48){
        horasX = horas - 40
        horasN = 40
        sueldoU = sueldo/(horasN + (horasX*2))
        resultado += "Sueldo adquirido por horas normales: $" + ((sueldoU*40).toFixed(2)) + "\n";
        resultado += "Sueldo adquirido por" + horasX + " horas extras comunes:" + ((sueldoU*(horasX*2)).toFixed(2)) + "\n";
        resultado += "Sueldo adquiridos por horas extras >8: $0";
        document.getElementById("output").innerText = resultado;
    }
    else if(horas>48 && horas<=84){
        horasXE = horas - 48;
        horasX = 8;
        horasN = 40;
        sueldoU = sueldo/(horasN + (horasX*2) + (horasXE*3));
        resultado += "Sueldo adquirido por horas normales: $" + ((sueldoU*40).toFixed(2)) + "\n";
        resultado += "Sueldo adquirido por" + horasX + " horas extras comunes: " + ((sueldoU*(horasX*2)).toFixed(2)) + "\n";
        resultado += "Sueldo adquiridos por" + horasXE + "horas extras >8: " + ((sueldoU*(horasXE*3)).toFixed(2));
        document.getElementById("output").innerText = resultado;
    }
    else{
        alert("Eso es humanamente imposible si trabajas 12 horas todos los dias ó más, te moririas :(");
        todoesvalido = false;
    }
    if (!todoesvalido){
        return false;
    }
}
function borrarF(){
    document.getElementById("sueldo").value = '';
    document.getElementById("horas").value = "";
    document.getElementById("output").innerText = "Esperando Datos..."
}