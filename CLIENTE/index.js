const agregarLista = (tareas) => {
    const ul = document.querySelector('ul');

    tareas.forEach(element => {
        const elemento = document.createElement("li");
        elemento.innerHTML = element.id + " |" + element.name + " |" + element.fechaEntrega;
        ul.appendChild(elemento);
    });
}

const getTareas = () => {
    axios.get("http://localhost:3000/tareas/")
        .then(response => {
            const tareas = response.data.data;
            console.log(tareas);
            agregarLista(tareas);
        }).catch(error => console.error(error.response));

};

const createTarea = () => {
    const tarea = {

    }
}