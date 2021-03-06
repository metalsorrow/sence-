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
        imgDog: null,

        inputs: [0,0],
        res: 0,
        count: 0
    },
    methods:{
        changeImage: function(img){
            this.imgDog = img;
        },
        add: function(){
            this.res = this.inputs[0] + this.inputs[1];
        },
        subs: function(){
            this.res = this.inputs[0] - this.inputs[1];
        },
        div: function(){
            let res = this.inputs[0] / this.inputs[1];
            isNaN(res) ? null : this.res = res;
        },
        mult: function(){
            this.res = this.inputs[0] * this.inputs[1];
        },
        countUp: function(){
            this.count++;
        },
        restart: function(){
            this.count=0;
        }
    }
    

})