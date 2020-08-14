//get elements forms
document
  .getElementById("formProduct")
  .addEventListener("submit", (event) => calcularProductos(event));

document
  .getElementById("formPromedio")
  .addEventListener("submit", (event) => calcularPromedio(event));

document
  .getElementById("formEmp")
  .addEventListener("submit", (event) => sendForm(event));

//Funciones
function calcularProductos(e) {
  e.preventDefault();
  const precioProductos = [150000, 30000, 15000, 20000];
  let netoDescuento = 0;
  let precioTotal;

  neto = precioProductos.reduce(
    (prev, next, index) => prev + e.target[index].value * next,
    0
  );

  if (neto > 0) {
    e.target[5].value = neto + $;

    if (neto > 1000000) {
      netoDescuento = neto * 0.15;

      e.target[4].value = "Se aplica descuento";
      e.target[6].value = netoDescuento + $;
    } else {
      e.target[4].value = "No se aplica descuento";
      e.target[6].value = "No se aplica descuento";
    }

    precioTotal = neto - netoDescuento;

    e.target[7].value = precioTotal + $;
  }

  return true;
}

function calcularPromedio(e) {
  e.preventDefault();

  const notas = [];
  let mensaje = "";
  let promedio = 0;

  notas.push(Number(e.target[0].value));
  notas.push(Number(e.target[1].value));
  notas.push(Number(e.target[2].value));

  notas.forEach((nota, index) => {
    if (isNaN(nota) || nota === 0) {
      mensaje += `Nota ${index + 1} No corresponde a una variable numerica \n`;
    } else if (nota > 7 || nota < 1) {
      mensaje += `Nota ${index + 1} Fuera de Rango \n`;
    }
  });

  if (!mensaje) {
    promedio = notas.reduce((prev, next) => prev + next) / 3;

    if (promedio < 4) {
      mensaje = "Estudiante reprobado";
    } else if (promedio >= 6) {
      mensaje = "Estudiante aprobado con nota sobresaliente";
    } else if (promedio >= 4 && promedio < 6) {
      mensaje = "Estudiante aprobado";
    }
  }

  e.target[4].value = promedio.toFixed(2);
  e.target[3].value = mensaje;

  return true;
}

function sendForm(e) {
  const inputs = [];
  let mensaje = "";

  inputs.push(e.target[0]);
  inputs.push(e.target[1]);
  inputs.push(e.target[2]);
  inputs.push(e.target[3]);

  inputs.map((input) => {
    if (input.value === "") {
      mensaje += `El campo ${input.name} esta vacio! \n`;
      return;
    }
  });

  if (!mensaje) {
    let edadParsed = Number(inputs[3].value);
    let runValue = inputs[2].value;
    //Validar Edad
    if (isNaN(edadParsed)) {
      mensaje += "Edad debe ser numerico, ingrese nuevamente \n";
    } else if (edadParsed < 18 || edadParsed > 115) {
      mensaje += `Edad no valida,   ${edadParsed}   , edad debe de estar entre 18 y 115 años   \n `;
    }
    //Validar Run
    if (runValue.length > 13 || runValue.length < 11) {
      mensaje +=
        "Run no presenta un formato correcto, entre 13 y 11 Caracteres. \n";
    }
  }

  if (mensaje) {
    alert(mensaje);
    e.preventDefault();
  }

  return true;
}
