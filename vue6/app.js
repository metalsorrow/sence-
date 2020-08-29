const app = new Vue({
    el: '#app',
    data: {
        mensaje: "Hola mundo desde vue js",
        image: './doggo.jpg',
        google: 'http://www.google.cl',
        socials: [
            {link: 'https://www.facebook.cl', name: 'facebook'},
            {link: 'https://www.youtube.cl', name: 'youtube'},
            {link: 'https://www.instagram.cl', name: 'instagram'}
        ],
        inventario: 10,
        edad: 0,
        button_state: "",
        number: 0,
        fuente: 30,
        marcas: [
            "Marca 1",
            "Marca 2",
            "Marca 3",
            "Marca 4",
        ],
        products: [],
        imgDog: null
    },
    methods:{
        changeImage: function(img){
            this.imgDog = img;
        },
        submit(e){
            e.preventDefault();
            const elements = [...e.target.elements];
            const newCar = {};            
            elements.map( el => {
                newCar[el.name] = el.value;
            })
            this.products.push(newCar);
            console.log(this.products)
        }
    }
    
})