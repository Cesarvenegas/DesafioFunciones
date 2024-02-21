// Obtener referencia a cada div por su id
const azulDiv = document.getElementById("azul");
const rojoDiv = document.getElementById("rojo");
const verdeDiv = document.getElementById("verde");
const amarilloDiv = document.getElementById("amarillo");

// Función para cambiar el color al negro cuando se hace clic
function cambiarColorNegro(event) {
  event.target.style.backgroundColor = 'black';
}

// Agregar evento de clic a cada div
azulDiv.addEventListener("click", cambiarColorNegro);
rojoDiv.addEventListener("click", cambiarColorNegro);
verdeDiv.addEventListener("click", cambiarColorNegro);
amarilloDiv.addEventListener("click", cambiarColorNegro);