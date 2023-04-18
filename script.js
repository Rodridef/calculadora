// Seleccionamos todos los botones de la calculadora y el display
const botones = document.querySelectorAll(".boton");
const display = document.querySelector(".numero");

// Creamos una variable que almacena el primer número de la operación
let numero1 = "";
// Creamos una variable que almacena el segundo número de la operación
let numero2 = "";
// Creamos una variable que almacena el tipo de operación que se va a realizar
let operacion = "";

// Función que actualiza el contenido del display
function actualizarDisplay(valor) {
  display.textContent = valor;
}

// Función que agrega un número al display
function agregarNumero(numero) {
  // Verificamos si se está ingresando el primer o segundo número
  if (operacion === "") {
    numero1 += numero;
    actualizarDisplay(numero1);
  } else {
    numero2 += numero;
    actualizarDisplay(`${numero1} ${operacion} ${numero2}`);
  }
}

// Función que realiza la operación matemática y actualiza el display con el resultado
function calcular() {
  // Convertimos los números a tipo float
  const num1 = parseFloat(numero1);
  const num2 = parseFloat(numero2);

  // Verificamos el tipo de operación a realizar
  switch (operacion) {
    case "+":
      resultado = num1 + num2;
      break;
    case "-":
      resultado = num1 - num2;
      break;
    case "x":
      resultado = num1 * num2;
      break;
    case "/":
      resultado = num1 / num2;
      break;
    default:
      return;
  }

  // Actualizamos el display con el resultado
  actualizarDisplay(resultado);
  // Reiniciamos las variables de número y operación
  numero1 = resultado.toString();
  numero2 = "";
  operacion = "";
}

// Función que maneja el evento click de los botones
function manejarClick(e) {
  // Obtenemos el valor del botón pulsado
  const valor = e.target.textContent;

  // Verificamos si es un número o una operación
  if (!isNaN(valor) || valor === ".") {
    agregarNumero(valor);
  } else if (valor === "AC") {
    // Si el valor es AC, reseteamos las variables de número y operación
    numero1 = "";
    numero2 = "";
    operacion = "";
    actualizarDisplay("0");
  } else if (valor === "=") {
    // Si el valor es =, realizamos la operación
    calcular();
  } else {
    // Si el valor es una operación, la almacenamos en la variable operacion
    operacion = valor;
    actualizarDisplay(`${numero1} ${operacion}`);
  }
}

// Agregamos el evento click a todos los botones
botones.forEach((boton) => {
  boton.addEventListener("click", manejarClick);
});
