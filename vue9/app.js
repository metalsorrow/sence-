const app = new Vue({
    el: '#app',
    data: {
        dummies: ["Affenpinscher", "Basenji", "Basset Leonado De Bretaña", "Beagle", "Beauceron"],
        items: [],
        dog: ""
    },
    methods:{
        calc(){
            return this.items.length < 2 ? true : false; 
        },
        add(){
            if(this.dog){
                this.dummies.push(this.dog);
                this.dog = "";
            }
        }
        
    },
    computed:{
    }
    
})