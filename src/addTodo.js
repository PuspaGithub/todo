import { create } from "./create.js"
import { renderTodos } from "./renderTodos.js"
import { renderProjects } from "./renderProject.js";

const todoDialog = document.querySelector("#todo-dialog");
const todoForm = document.querySelector("#todo-form");
const addProjectOptions = document.querySelector("#todo-project-select");


export function showTodoDialog(projects){
    todoDialog.showModal();
    addProjectOptions.textContent = "";
    for(let i=0; i<projects.length; i++){
        const option = create("option", "", "", projects[i].name);
        option.value = projects[i].name;
        addProjectOptions.append(option);
    }
}

export function closeTodoDialog(){
    todoDialog.close();
    todoForm.reset();
}

export function addTodoFunction(projects){
    const formData = new FormData(todoForm);
    const data = Object.fromEntries(formData);

    const project = projects.find(project => project.name === data.project);
    projects.forEach(p => p.active = false);
    project.active = true;
    project.todos.push({
        id: crypto.randomUUID(),
        title: data.title,
        description: data.description,
        dueDate: data.dueDate,
        priority: data.priority,
        project: data.project,
    })
    localStorage.setItem("projects", JSON.stringify(projects))

    todoForm.reset();
    todoDialog.close();

    renderTodos(project);
    renderProjects(projects)
}