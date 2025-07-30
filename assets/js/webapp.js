'use strict';
import {Task} from './Task.js';
let close = false;
const projectList = document.querySelector('.project-list');
const foldIcon = document.getElementById("fold");
const overlay = document.querySelector(".overlay");
const foldProjectList = function() {
    if (close) {
        foldIcon.classList.add("folded");
        projectList.classList.add('hidden');
        overlay.classList.add('hidden');
    }
    else {
        foldIcon.classList.remove("folded");
        projectList.classList.remove('hidden');
        overlay.classList.remove('hidden');
    }
}

if (window.innerWidth < 633) {
    close = true;
    foldProjectList();
}
window.addEventListener('resize', () => {
    if (window.innerWidth < 633) {
        close = true;
        foldProjectList();
    }
})
foldIcon.addEventListener("click", () => {
    close ^= true;
    foldProjectList();
});
overlay.addEventListener('click', () => {
    close = true;
    foldProjectList();
})


///////////////////////////////////////
const createNewSection = function (containerName, sectionName) {
    const container = document.getElementById(containerName);
    const section = document.createElement('section');
    section.classList.add(containerName + '__category');

    const subtitle = document.createElement("subtitle-wrapper");
    subtitle.setAttribute("subtitle", sectionName);

    const list = document.createElement('ul');
    list.id = sectionName;

    const hr = document.createElement('div');
    hr.classList.add('hr');

    section.append(subtitle, list);
    container.append(section, hr);
    return list;
}
const l = createNewSection('task-list', 'No Date');


/////////////////////////////////////////////////////
// select icons active
const deactiveAllIcons = function (icons) {
    icons.forEach((i) => {
        i.classList.remove('icon-active');
    })
}
const icons = document.querySelectorAll('.sidebar .icon');
icons.forEach((i) => {
    i.addEventListener('click', () => {
        deactiveAllIcons(icons);
        i.classList.add('icon-active');
    })
})

// ////////////////////////////////////////////////
// task list
// const taskListItems = document.querySelectorAll('.task-list__item');
// taskListItems.forEach((item) => {
//     item.addEventListener('click', )
// });

const appendTask = function(task, container) {
    // <list-item 
    //     class=" task-list__item"
    //     content-text="All"
    //     icon-id="#a"
    //     data-tips='["15"]'
    // >
    // </list-item>
    const listItem = document.createElement('list-item');
    listItem.setAttribute('content-text', task.title);
    listItem.setAttribute('icon-id', '#a');
    listItem.setAttribute('data-tips', '["Inbox"]');
    listItem.className = 'task-list__item';
    container.appendChild(listItem);
}
const taskList = document.getElementById('task-list');
const tasks = [
    new Task("1", "Write documentation", "Explain the API usage."),
    new Task("2", "Fix bugs", "Resolve issues from backlog."),
    new Task("3", "Deploy project", "Push to production.")
];
tasks.forEach((task) => {
    appendTask(task, l);
});

