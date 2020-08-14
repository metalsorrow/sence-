    alert("Bienvenido al portal de Notas")

    let notas = []
    let nota;
    let prom = 0;

    for(let i = 0; i < 3; i){
        nota = prompt("porfavor ingrese la nota nro: " + (i+1))
        if(Number(nota) && Number(nota) > 0 && Number(nota) <= 7){
            notas.push(Number(nota))
            i = notas.length
        } else {
            alert("Nota no Valida")
        }
    }
    notas.map( (nota)=> {
        prom += nota;
    })
    prom /= notas.length

    console.log(`El promedio es de ${prom}`)
    alert(`El promedio es de ${prom}`)

    if(prom >=4){
        console.log(`Alumno Aprobado!!`)
        alert(`Alumno Aprobado!!`)
    } else {
        console.log(`Mejor Suerte`)
        alert(`Mejor Suerte`)
    }