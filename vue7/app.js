const app = new Vue({
    el: '#app',
    data: {
        num1: 0,
        num2: 0,
        op : "",
        res : 0
    },
    methods:{
        getCalc(){
            const op = this.op;
            if(op === "/"){
                this.res = this.num1 / this.num2;
                isNaN(this.res) ? this.res = 0 : null;
                return;
            } else if(op === "*"){
                this.res = this.num1 * this.num2;
                return;
            } else if(op === "+"){
                this.res = this.num1 + this.num2;
                return;
            } else if(op === "-"){
                this.res = this.num1 - this.num2;
                return;
            }
        }
    }
})