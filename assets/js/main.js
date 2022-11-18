const form = document.getElementById("form");
const tareaInput = document.getElementById("tareaInput");
const total = document.getElementById("total");
const complete = document.getElementById("complete");
const tareas = document.getElementById("tareas");

let listaTareas = [
  {name: "Terminar el desafío atrasado", id: 1, completed: false},
  {name: "Dormir el fin de semana", id: 2, completed: false},
  {name: "Completar el bootcamp sin divorciarme", id: 3, completed: false},
];

let tareaId = listaTareas.length;

const render = (array) => {
  let lista = "";
  let totalCompletado = 0;
  tareas.innerHTML = "";
  array.forEach((item) => {
    let estado = "";
    let completedStyle = "";
    if (item.completed) {
      estado = "checked";
      totalCompletado++;
    }
    let template = `
      <li class="todo">
        <span class="todo-id">${item.id}</span>
        <p ${completedStyle}>${item.name}</p>
        <div class="todo-btns">
          <input class="todo-check" data-update="${item.id}" type="checkbox" ${estado}> 
          <button data-delete="${item.id}">X</button>
        </div>
      </li>
    `;
    lista += template;
  });
  tareas.innerHTML = lista;
  total.textContent = array.length;
  complete.textContent = totalCompletado;
  console.log(listaTareas);
};
render(listaTareas);

const agregarTarea = () => {
  if (tareaInput.value != "") {
    tareaId++;
    let nuevaTarea = {name: tareaInput.value, id: tareaId, completed: false};
    listaTareas.push(nuevaTarea);
    render(listaTareas);
    tareaInput.value = "";
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  agregarTarea();
});

const eliminarTarea = (e) => {
  if (e.target.dataset.delete) {
    const id = e.target.dataset.delete;
    const index = listaTareas.findIndex((item) => item.id == id);
    listaTareas.splice(index, 1);
    render(listaTareas);
  }
};

const actualizarListaTarea = (e) => {
  if (e.target.dataset.update) {
    const id = e.target.dataset.update;
    const index = listaTareas.findIndex((item) => item.id == id);
    listaTareas[index].completed = !listaTareas[index].completed;

    render(listaTareas);
  }
};

tareas.addEventListener("click", (e) => {
  eliminarTarea(e);
  actualizarListaTarea(e);
});