const Perro = {
    raza: 'Akita Inu',
    edad: 3,
    toString: function(){
        if(Perro.raza === this.raza){
            return `Soy un ${this.raza}, y tengo ${this.edad} años.`
        } else {
            return `Soy un ${this.raza} (aunque esta no es mi raza original), y tengo ${this.edad} años.`
        }
    }
}


const akita = Object.create(Perro);
const Alano = Object.create(Perro);
const Alaskan = Object.create(Perro);
const Appenzeller = Object.create(Perro);

akita.raza = 'Akita Inu';
akita.edad = 5;
console.log(
    akita.toString()
)

Alano.raza = 'Alano español';
Alano.edad = 4;
console.log(
    Alano.toString()
)

Alaskan.raza = 'Alaskan Klee Kai';
Alaskan.edad = 2;
console.log(
    Alaskan.toString()
)

Appenzeller.raza = 'Appenzeller';
Appenzeller.edad = 9;
console.log(
    Appenzeller.toString()
)