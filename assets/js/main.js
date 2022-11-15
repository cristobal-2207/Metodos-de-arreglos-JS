const inputTarea = document.querySelector("#inputTarea");
const agregarTarea = document.querySelector("#agregarTarea");
const listaTareas = document.querySelector("#listaTareas");
const cuentaTareas = document.querySelector("#cuenta-tareas");
const tareas = [];
let listaId = tareas.length;

agregarTarea.addEventListener("click", () => {
  const nuevaTarea = inputTarea.value
  tareas.push(nuevaTarea)
  inputTarea.value = ""

  let html = ""
  for (let tarea of tareas){
    html += `<li>${tarea}</li>`;
  }
  listaTareas.innerHTML = html;
})