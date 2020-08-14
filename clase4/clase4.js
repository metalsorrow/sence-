const nota = Number(prompt("Ingresa tu nota"))

if(!nota || nota > 7 || nota < 1){
    console.log("Nota no es un numero valido")
} else if(nota > 5.5) {
    console.log("Alumno aprobado y no rinde examen")
} else if(nota >= 4){
    console.log("Alumno aprueba la asignatura y rinde el examen")
} else if(nota < 4 ){
    console.log("Alumno reprueba la asignatura y no puede rendir el Examen")
}



const mes = Number(prompt("Ingresar el mes 1-12"))
switch (mes) {
    case 1:
        console.log("Enero")
        break;
    case 2:
        console.log("Febrero")
        break;
    case 3:
        console.log("Marzo")
        break;
    case 4:
        console.log("Abril")
        break;
    case 5:
        console.log("Mayo")
        break;
    case 6:
        console.log("Junio")
        break;
    case 7:
        console.log("Julio")
        break;
    case 8:
        console.log("Agosto")
        break;
    case 9:
        console.log("Septiembre")
        break;
    case 10:
        console.log("Octubre")
        break;
    case 11:
        console.log("Noviembre")
        break;
    case 12:
        console.log("Diciembre")
        break;
    default:
        console.log("Valor no valido")
        break;
}