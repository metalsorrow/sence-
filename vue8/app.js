const app = new Vue({
    el: '#app',
    data: {
        nombre: "",
        edad: "",
        nombre2: "",
        apellido: "",
        rut: "",
        email: "",
        direccion: ""
    },
    methods:{
    },
    computed:{
        getData(){
            if(this.nombre && this.edad)
                return `El nombre es ${this.nombre} y su edad ${this.edad}`;
        },
        getPersona(){
            return `${this.nombre2} ${this.apellido}`;
        },
        getDetalle(){
            if(this.rut && this.email && this.direccion)
            return `  ${this.rut} - ${this.email} - ${this.direccion}`;
        }
    }
    
})