let edad = prompt("Ingresa tu edad")

if(Number(edad)){
    if(edad >= 18 ){
        console.log("Eres mayor de edad! Adelante")
    } else if(edad <18 && edad >= 0 ) {
        console.log("Eres muy chiquito para entrar")
    } else {
        console.log("Espera, esto es extraño . . .")
    }
} else {
    console.log("Algo anda mal, tu edad tiene un error")
}