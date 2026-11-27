import { showDialog, closeDialog, addProjects } from "./addProject.js";
import { renderProjects } from "./renderProject.js";
import { showTodoDialog, closeTodoDialog, addTodoFunction } from "./addTodo.js"
import { renderTodos } from "./renderTodos.js"

const newProjectBtn = document.querySelector("#new-project-btn");
const closeProjectDialogBtn = document.querySelector("#cancel-project");
const projectForm = document.querySelector("#project-form");

const projectList = document.querySelector("#project-list");
const addTodo = document.querySelector("#add-todo");
const todoDialog = document.querySelector("#todo-dialog");

let projects = JSON.parse(localStorage.getItem("projects")) ?? [];

export function loadHome() {
    renderProjects(projects)
    
    newProjectBtn.addEventListener("click", () => {
        showDialog();
    });

    closeProjectDialogBtn.addEventListener("click", () => {
        closeDialog();
    });

    projectForm.addEventListener("submit", () => {
        addProjects(projects);
    })

    addTodo.addEventListener("click", ()=>{
        showTodoDialog(projects)
    })

    projectList.addEventListener("click", (e) => {
        const li = e.target.closest("li");
        const list = li.parentElement;
        const allList = list ? [...list.children]:[];
        
        allList.forEach(li => li.classList.remove("active"));
    
        li.classList.add("active");
        const project = projects.find(project => project.id === e.target.closest("li").dataset.projectId);
        
        renderTodos(project);
    })

    todoDialog.addEventListener("click", (e) => {
        if(e.target.id === "cancel-todo"){
            closeTodoDialog();
        } else if(e.target.id === "submit-todo"){
            e.preventDefault();
            addTodoFunction(projects);
        }
    })
}   