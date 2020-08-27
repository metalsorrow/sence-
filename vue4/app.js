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
        doggos: [
            {img: './doggo.jpg', name: 'doggo bonito'},
            {img: './doggo1.jpg', name: 'doggo mas bonito'},
            {img: './doggo2.jpg', name: 'doggo super bonito'},
            {img: './doggo3.jpg', name: 'doggo'},
        ],
        imgDog: null
    },
    methods:{
        changeImage: function(img){
            this.imgDog = img;
        }
    }
    
})