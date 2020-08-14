//1
const countNumberUpp = (num) => {
    let res = 0;
    for(let i = 1; i <= num; i++){
        res +=i
    }
    return res;
}

//2
const par = (num) => {
    return num % 2   ?   'impar' : 'par' 
} 

//3
const multy = (num) => {
    for(let i = 1; i <=10; i++){
        console.log(`${i} x ${num} = ${i*num}`)
    }
    return;
}

//4
const sumSalary = (num) => {
    const res = 0;
    for(let i = num; i > 0; i--){
        res += Number(prompt('Numero '+i))
    }

    return (res / num)
}

//5
const age25 = (num) => {
    let res = 0;
    for(let i = num; i > 0; i--){
        let val = Number(prompt('edad '+i))
        val > 25 ? res++ : null;
    }
    return res
}

//6
const fibb = (num) => {
    console.log(num)
    if (num <= 1) return 1;
    return fibb(num - 1) + fibb(num - 2);
}



console.log(countNumberUpp(3))
console.log(par(4))
multy(4)
// console.log(sumSalary(4))
fibb(2)