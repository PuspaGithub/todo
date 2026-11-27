import { renderProjects } from "./renderProject.js"
import { renderTodos } from "./renderTodos.js";

const projectDialog = document.querySelector("#project-dialog");
const projectForm = document.querySelector("#project-form");

const projectInput = document.querySelector("#project-input");

export function showDialog(){
    projectDialog.showModal();
}

export function closeDialog() {
    projectDialog.close();
    projectForm.reset();
}

export function addProjects(projects) {
    if(projectInput.value){
        const project = {
            id: crypto.randomUUID(),
            name: projectInput.value.trim(),
            todos: []
        }
        projects.push(project)
        localStorage.setItem("projects", JSON.stringify(projects))
        renderProjects(projects);
        renderTodos(project);
    }
    projectForm.reset();
}