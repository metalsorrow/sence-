class Alumno {
    constructor(rut, nombre, edad, curso, carrera){
        this.rut = rut;
        this.nombre = nombre;
        this.edad = edad;
        this.curso = curso;
        this.carrera = carrera;
    }


    toString = () => {
        console.log(this.rut,'/ rut')
        console.log(this.nombre,'/ nombre')
        console.log(this.edad,'/ edad')
        console.log(this.curso,'/ curso')
        console.log(this.carrera,'/ carrera')
    }

}

class BandaMusical {
    constructor(nroIntegrantes, discos, nombre, estilo, pais){
        this.nroIntegrantes = nroIntegrantes;
        this.discos = discos;
        this.nombre = nombre;
        this.estilo = estilo;
        this.pais = pais;
    }


    toString = () => {
        console.log(this.nroIntegrantes,'/ Numero Integrantes');
        console.log(this.nombre,'/ Nombre');
        console.log(this.estilo,'/ Estilo');
        console.log(this.pais,'/ Pais');
    }

    listDiscos = () => {
        this.discos.map( (disco, nro) => {
            console.log(`disco ${nro + 1}: ${disco}`);
        })
    }
}

const bandaX = new BandaMusical(3,['Disco Bueno', 'Disco mas o menos', 'Disco Malo'],'bandax','new age','chilito')
bandaX.toString();
bandaX.listDiscos();



class Perro {
    constructor({raza, nombre = 'doggo', edad}){
        this.raza = raza;
        this.nombre = nombre;
        this.edad = edad;
    }

    test =  () => console.log(this);

    toString = () => {
        console.log(`Raza: ${this.raza}`);
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Edad: ${this.edad}`)
    }

    ladrar = () => console.log('woof')

}


const doggi = new Perro({raza:'akita',edad:3})
doggi.ladrar();
doggi.toString();