const projectForm = document.querySelector("#project-form");
const projectInput = document.querySelector("#projectInput").value;

export function showModal(dialog){
    dialog.showModal();
}

export function closeModal(dialog){
    dialog.closeModal();
    projectForm.reset();
}

export function addProject(projects){
    projects.push({
        id: crypto.randomUUID(),
        name: projectInput.trim(),
        todo: [],
    });
    localStorage.setItem("projects", JSON.stringify(projects));
    projectForm.reset();
}