import { create } from "./create.js"
const tbody = document.querySelector("#tbody");
const projectName = document.querySelector("#project-name")

export function renderTodos(project){    
    tbody.textContent = "";
    projectName.textContent = project.name;

    for(let i=0; i<project["todos"].length; i++){
        const projectTodo = project["todos"][i];
        const tr = create("tr");

        const sn = create("th", "", "", i+1); 
        const todo = create("th", "", "", projectTodo.title);
        const description = create("th", "", "", projectTodo.description)
        const dueDate = create("th", "", "", projectTodo.dueDate)
        const priority = create("th", "", "", projectTodo.priority)
        const update = create("th", "", "", "Update")
        const del = create("th", "", "", "Delete")

        tr.append(sn, todo, description, dueDate, priority, update, del)
        tbody.append(tr);
    }
    
}

/*
    <th>S.N</th>
    <th>Todo</th>
    <th>Description</th>
    <th>Due Date</th>
    <th>Priority</th>
    <th>Update</th>
    <th>Delete</th>
*/