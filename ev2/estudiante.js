class Estudiante {
    constructor(nombre, edad, nacimiento, curso){
        this.nombre = nombre;
        this.edad = edad;
        this.nacimiento = nacimiento;
        this.curso = curso;
    }

    toString(){
        console.log(
            this.nombre,
            this.edad,
            this.nacimiento,
            this.curso
        )
    }
}



const estudianteOnline = new Estudiante('marcos',24,'29/11/1996','front-end');
const estudiantePresencial = new Estudiante('jose',12,'29/10/1922','front-end');

estudianteOnline.toString();
estudiantePresencial.toString();