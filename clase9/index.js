
const calculadora = (e) => {
    e.preventDefault();
    let num1 = Number(e.target[0].value)
    let num2 = Number(e.target[1].value)
    let res;
    switch (e.target[2].value) {
        case '+':
            res = num1 + num2
            break;
        case '-':
            res = num1 - num2
            break;
    
        case '*':
            res = num1 * num2
            break;
        case '/':
            res = num1 / num2
            break;
                
        default:
            break;
    }


    console.log(e)
    document.getElementById('res').innerText = res
}

const promedio = (e) => {
    e.preventDefault();
    
    let num1 = Number(e.target[0].value)
    let num2 = Number(e.target[1].value)
    let num3 = Number(e.target[2].value)


    res = (num1 + num2 + num3) / 3

    document.getElementById('prom').innerText = res
}

document.getElementById('submit_calculadora').addEventListener('submit',function(e){ calculadora(e)})
document.getElementById('submit_promedio').addEventListener('submit',function(e){ promedio(e)})