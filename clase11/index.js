const objInput = document.querySelectorAll('input');

const sendReq = (e) => {
    e.preventDefault();

    const nombre = e.target[0].value
    const email = e.target[1].value
    const telefono = e.target[2].value
    const mensaje = e.target[3].value
    const regExp = /@./ig;

    if(!nombre || !email || !telefono || !mensaje){
        alert(`Uno o varios campo esta vacios`)
        return
    }
    if(isNaN(telefono)){
        alert('Telefono invalido')
        return;
    } else if(telefono.length != 9){
        alert('Telefono debe tener 9 numeros')
        return
    }

    if(!email.match(regExp)){
        alert('Email no cuenta con " @ " o " . "')
        return
    }

    alert('Formulario correcto y enviado!')
}

const validate = (e) => {
    let errorBox = document.getElementById('error');
    e.target.value === '' ? errorBox.innerHTML  = `Falta llenar ${e.target.name}`: errorBox.innerHTML = '' ;
} 


document.getElementById('form').addEventListener('submit',(e) => { sendReq(e)})
document.querySelector('textarea').addEventListener('focusout',(e) => { validate(e)})


for (var clave in objInput){
    if (objInput.hasOwnProperty(clave)) {
        objInput[clave].addEventListener('focusout', (e) => { validate(e)} )
    }
}

