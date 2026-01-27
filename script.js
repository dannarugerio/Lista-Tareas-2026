/* Referencias al documento del DOM */

const tareaEntrada = document.getElementById("tareaEntrada");
const botonAgregar = document.getElementById("botonAgregar");
const contenedorTareas = document.getElementById("contenedorTareas");
const mensaje = document.getElementById("mensaje"); 

/* Función para crear el elemento tarea (Función creadora de Nodo Tarea) */ 

function crearElementoTarea() {
  //Crear los elementos html de la tarea 
  const tareaContenedor = document.createElement("div"); 
  const tareaTexto = document.createElement("p"); 
  const iconosContenedor = document.createElement("div");
  const iconoCompletada = document.createElement("i");
  const iconoEliminar = document.createElement("i"); 

  //  Creamos la estructura de la tarea 
  iconosContenedor.append(iconoCompletada, iconoEliminar);
  tareaContenedor.append(tareaTexto, iconosContenedor); 

  //Agregamos las clases a los elementos de la tarea 
  tareaContenedor.classList.add("tarea");
  tareaTexto.classList.add("tarea-texto"); 
  iconosContenedor.classList.add("tarea-iconos");
  iconoCompletada.classList.add("bis", "bi-check-circle"); 
  iconoEliminar.classList.add("bi", "bi-trash2");

  //Agregamos el texto del usuario
tareaTexto.innerText = tareaEntrada.value; 

// Escuchadores de los iconos
iconoCompletada.addEventListener("click", (e) => {
  //Código que se ejecuta
  const tareaElemento = e.target.parentNode.parentNode;
  const esCompletada = tareaElemento.classList.contains("tarea-completada"); 

  tareaElemento.classList.toggle("tarea-completada");

  if(esCompletada) {
    e.target.classList.remove("bi-dash-circle"); 
    e.target.classList.add("bi-check-circle");
  } else {
    e.target.classList.remove("bi-check-circle"); 
    e.target.classList.add("bi-dash-circle");
  }
})

iconoEliminar.addEventListener("click", (e) => {
  //Código que se ejecuta
  const tareaElemento = e.target.parentNode.parentNode; 
  tareaElemento.remove();
})

//Retornamos la estructura de la tarea 
return tareaContenedor; 
}

/* Escuchador Botón */
botonAgregar.addEventListener("click", agregarTarea); 

/* Función para Agregar el Elemento Tarea*/

function agregarTarea() {
  //Generar la constante para evaluar si hay texto o no 
  const texto = tareaEntrada.value.trim(); 
  //Evaluar la constante de texto 
  if(texto) {
    //Ejecutas esto
      //Traemos el elemento retornado por la función crearElementoTarea 
  const elementoTarea = crearElementoTarea(); 
  contenedorTareas.append(elementoTarea);
  //Reiniciar el valor del input 
  tareaEntrada.value = " "; 
  //Mostrar el mensaje de tarea creada satisfactoriamente 
mensaje.textContent = "Tarea creada con éxito!";
  } else{
    //Sino ejecutas esto otro
    mensaje.textContent = "No escribiste nada chamaco"; 
  }
}
/* Hacemos que al presionar ENTER en el input se agregue la tarea */

tareaEntrada.addEventListener("keydown", (e) => {
  //Evaluar la tecla presionada
  if (e.key == "Enter") {
    //Esto ocurre 
    agregarTarea(); 
  }
})

/* Mostrar un mensaje al escribir  */
tareaEntrada.addEventListener("input", () => {
  //Evaluamos si el valor del input está vacío o no 
  if (tareaEntrada.value.trim() === "") {
    mensaje.textContent = "Escribe tu próxima tarea";
  } else {
    mensaje.textContent = "Escribiendo...";
  }
})