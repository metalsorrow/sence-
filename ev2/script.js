// document.getElementById('form-contact').addEventListener('submit', e => preventF(e) )

// function preventF (e){ e.preventDefault();}


$(document).ready(function() {
    $('#slider').bjqs({
        height : 400,
        with : 800,
        
        animtype : 'fade', // accepts 'fade' or 'slide'
        animduration : 500, // how fast the animation are
        animspeed : 4000, // the delay between each slide
        automatic : true, // automatic
        
        showcontrols : true, // show next and prev controls
        centercontrols : true, // center controls verically
        nexttext : 'Next', // Text for 'next' button (can use HTML)
        prevtext : 'Prev', // Text for 'previous' button (can use HTML)
        showmarkers : true, // Show individual slide markers
        centermarkers : true, // Center markers horizontally
        
        keyboardnav : true, // enable keyboard navigation
        hoverpause : false, // pause the slider on hover
        
        usecaptions : true, // show captions for images using the image title tag
        responsive : true // enable responsive capabilities (beta)
    });
    $('#form-contact').validate({
            rules: {
                email: {
                    required: true,
                    email: true
                },
                nombre: {
                    required: true,
                },
                telefono: {
                    required: true,
                    number: true
                },
                mensaje: {
                    required: true
                }
            },
            messages: {
                email: {
                    required: 'Correo necesario para enviar tu mensaje',
                    email: 'Formato de tu correo incorrecto, revisar informacion'
                },
                nombre: {
                    required: 'Nombre es requerido para enviar tu formulario'
                },
                telefono: {
                    required: 'El telefono es necesario para contactarte'
                },
                mensaje: {
                    required: 'Necesitas ingresar un mensaje',
                    maxlength: 'Mensaje demasiado largo para su envio'
                }
    
            }
        })

    $(".drop").click(function(){
        $(this.childNodes[3]).toggle("fast")
    }
    );
});



document.getElementById('form-cotizar').addEventListener('submit', (e) => {
    e.preventDefault();

    let total = Number(e.target[0].value);
    let descuento = 0;

    console.log(total >= 100);
    
    
    if(total >= 150000){
        descuento = total * 0.20;
    }
    else if(total >= 120000){
        descuento = total * 0.15;
    }
    else if(total >= 100000){
        descuento = total * 0.13;
    }
    else if(total >= 80000){
        descuento = total * 0.10;
    }

    e.target[1].value = Math.floor(total - descuento);
    e.target[2].value = Math.floor(descuento);

    e.target[1].parentElement.className = 'form-group';
    e.target[2].parentElement.className = 'form-group';
})



