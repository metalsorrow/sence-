

const clac_imc = (e) => {
    e.preventDefault()
    let altura = Number(e.target[0].value)
    let peso = Number(e.target[1].value)
    let imc = (peso/Math.pow(altura/100,2))
    let mensaje = '';
    let dif;
    const IMC_OPTIMO = [18.5, 24.9]
    const inputIMC = e.target[2]
    const inputMensaje  = e.target[3]

    if(imc <= 18.5){
        dif = (IMC_OPTIMO[0] - imc).toFixed(3)
        mensaje=`Estas bajo peso - Tu IMC debe aumentar en ${dif} puntos`
    } else if (imc >=25){
        dif = (imc - IMC_OPTIMO[1]).toFixed(3)
        mensaje = `Estas sobre peso - Tu IMC debe disminuir en ${dif} puntos` 
    } else {
        mensaje="Estas en un peso normal"
    }

    inputIMC.value = imc.toFixed(3)
    inputMensaje.value = mensaje;
}

document.getElementById('form_imc').addEventListener('submit',(e) => { clac_imc(e)})