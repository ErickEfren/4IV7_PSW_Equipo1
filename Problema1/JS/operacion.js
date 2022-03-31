function validar(formulario){
    let primeroI = document.getElementById("primeroI").value;
    let segundoI = document.getElementById("segundoI").value; 
    var todovalido = true;
    var expresion = /^\d{1,10}$/;

    if(expresion.test(primeroI)){
        if (expresion.test(segundoI)){
            todovalido = true;
            calcular();
        }
        else{
            alert("el segundp número no es válido :(");
        document.getElementById("segundoI").focus();
        todovalido = false;
        document.getElementById("resultado").innerHTML = "";
        }
    }
    else{
        alert("el primer número no es válido :(");
        document.getElementById("primeroI").focus();
        todovalido = false;
        document.getElementById("resultado").innerHTML = "";
    }
    return todovalido;

}

function calcular(){
    let primeroI = document.getElementById("primeroI").value;
    let segundoI = document.getElementById("segundoI").value; 
    let n1 = parseInt(primeroI);
    let n2 = parseInt(segundoI);
    let total;
    console.log("primernumero: "+n1);
    console.log("segundonumero: " +n2);
    if(n1==n2){
        total=n1*n2;
    }
    else{
        if(n1>n2){
            total=n1-n2;
        }
        else{
            total=n1+n2;

        }

    }
    document.getElementById("resultado").innerHTML = total;
}
    /*if primeroI==segundoI;
    primero*segundo;
    else : 
    primeroI>segundoI;
    if primeroI-segundoI;
    else : 
    segundoI+primeroI



    document.getElementById("resultado").value = "$" + total;

}
*/
function borrardatos(){
    document.getElementById("primeroI").value = "";
    document.getElementById("segundoI").value = "";
    document.getElementById("resultado").innerHTML = "";

}