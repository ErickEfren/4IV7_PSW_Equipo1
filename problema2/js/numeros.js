function validar(formulario){
    var n1=document.getElementById("1numero").value;
    var n2=document.getElementById("2numero").value;
    var n3=document.getElementById("3numero").value;
    var num1=parseInt(n1);
    var num2=parseInt(n2);
    var num3=parseInt(n3);
    var exp=/^\d{1,6}$/;

    document.getElementById("resultado").innerHTML="";
    if(exp.test(num1)){
        document.getElementById("notificacion").innerHTML="Esperando datos";
        if(exp.test(num2)){
            document.getElementById("notificacion").innerHTML="Esperando datos";
            if(exp.test(num3)){
                document.getElementById("notificacion").innerHTML="";
                console.log("1er: "+num1+", 2do: "+num2+", 3er: "+num3);
                //llamar a la función
                calcularMayor(num1,num2,num3);
            }else{
                document.getElementById("notificacion").innerHTML="El valor del número 3 no es válido :(";
                document.getElementById("3numero").focus();
            }
        }else{
            document.getElementById("notificacion").innerHTML="El valor del número 2 no es válido :(";
            document.getElementById("2numero").focus();
        }
    }else{
        document.getElementById("notificacion").innerHTML="El valor del número 1 no es válido :(";
        document.getElementById("1numero").focus();
    }

}

function calcularMayor(n1,n2,n3){
    var numero1=n1;
    var numero2=n2;
    var numero3=n3;
    console.log("1er: "+numero1+", 2do: "+numero2+", 3er: "+numero3);

    if(numero1<numero2){
        if(numero2<numero3){
            document.getElementById("resultado").innerHTML="El número mayor es: "+numero3;
        }else{
            document.getElementById("resultado").innerHTML="El número mayor es: "+numero2;
        }
    }else{
        if(numero1<numero3){
            document.getElementById("resultado").innerHTML="El número mayor es: "+numero3;
        }else{
            document.getElementById("resultado").innerHTML="El número mayor es: "+numero1;
        }
    }
}