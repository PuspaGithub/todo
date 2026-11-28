import { create } from "./create.js";

const projectList = document.querySelector("#project-list");

export function renderProjects(projects){
    projectList.textContent = "";
    if(projects.length) {
        for(let i=0; i<projects.length; i++){
            const li = create("li");
            li.dataset.projectId = projects[i].id;
            li.dataset.active = projects[i].active;
            if(projects[i].active === true){
                li.classList.add("active");
            }
            const btn = create("button");

            const noOfTodos = projects[i]["todos"].length ? projects[i]["todos"].length : "0";

            const span1 = create("span", "project-name", "", projects[i]["name"]);
            const span2 = create("span", "count", "", noOfTodos);

            btn.append(span1, span2);

            li.append(btn);

            projectList.append(li);
        }
    }
    return projectList;

}