import { showModal, closeModal, addProject } from "./addProject.js"

const addProjectBtn = document.querySelector("#addProject");
const closeProjectDialog = document.querySelector("#cancel");
const projectForm = document.querySelector("#project-form");

const dialog = document.querySelector("dialog");

const projects = JSON.parse(localStorage.getItem("projects")) ?? [];

export function loadHome() {
    addProjectBtn.addEventListener("click", () => {
        showModal(dialog);
    });

    closeProjectDialog.addEventListener("click", () => {
        closeModal(dialog);
    });

    projectForm.addEventListener("submit", () => {
        addProject(projects);
    })


}   