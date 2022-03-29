function Csueldo() {
    var tiempo = parseInt(document.getElementById("year").value);
    var sueldo = parseInt(document.getElementById("sueldoM").value);
    var utilidad = "";
    if (tiempo < 0 || tiempo > 25) {
        utilidad = "No se permiten numeros negativos en el campo años trabajados" + "\n";
        utilidad += "La cantidad de años maximos que la empresa permite trabajar son de: 25 años";
        document.getElementById("year").value = "";
    } else {
        if (sueldo > 120000 || sueldo < 500) {
            utilidad = "No se permiten numeros negativos en el campo sueldo mensual" + "\n";
            utilidad += "El sueldo maximo de un trabajador es de: $120000" + "\n";
            utilidad += "El sueldo minimo de un trabajador es de: $500"
            document.getElementById("sueldoM").value = "";
        } else {
            if (tiempo < 1) {
                utilidad = "Su utilidad por tiempo en la empresa es del 5% dado su salario son: $" + sueldo * 0.05 + "\n";
                utilidad += "Su sueldo final considerando su utilidad es de: $" + ((sueldo * 0.05) + sueldo);
            } else {
                if (tiempo >= 1 && tiempo < 2) {
                    utilidad = "Su utilidad por tiempo en la empresa es del 7% dado su salario son: $" + sueldo * 0.07 + "\n";
                    utilidad += "Su sueldo final considerando su utilidad es de: $" + ((sueldo * 0.07) + sueldo);
                } else {
                    if (tiempo >= 2 && tiempo < 5) {
                        utilidad = "Su utilidad por tiempo en la empresa es del 10% dado su salario son: $" + sueldo * 0.10 + "\n";
                        utilidad += "Su sueldo final considerando su utilidad es de: $" + ((sueldo * 0.10) + sueldo);
                    } else {
                        if (tiempo >= 5 && tiempo < 10) {
                            utilidad = "Su utilidad por tiempo en la empresa es del 15% dado su salario es: $" + sueldo * 0.15 + "\n";
                            utilidad += "Su sueldo final considerando su utilidad es de: $" + ((sueldo * 0.15) + sueldo);
                        } else {
                            if (tiempo >= 10) {
                                utilidad = "Su utilidad por tiempo en la empresa es del 20% dado su salario es: $" + sueldo * 0.20 + "\n";
                                utilidad += "Su sueldo final considerando su utilidad es de: $" + ((sueldo * 0.20) + sueldo);
                            }
                        }
                    }
                }
            }
        }
    }
    document.getElementById("sueldoF").innerHTML = utilidad;

}