const app = new Vue({
    el: '#app',
    data: {
        text: "",
        bool: false
    },
    methods:{
        someHandler(){
            this.bool =   this.text.indexOf(' ') >= 0
        },
    }
})