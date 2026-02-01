
     let  tasksData ={}


const todo = document.querySelector('#todo');
const progress = document.querySelector('#progress');
const done = document.querySelector('#done');
const columns = [todo, progress, done];
let draggedTask = null;

function addTask(title, desc, column) {
    const div = document.createElement('div');

    div.classList.add('task');
    div.setAttribute('draggable', 'true');

    div.innerHTML = `
        <h2>${title}</h2>
        <p>${desc}</p>
        <button>Delete</button>
    `;

    column.appendChild(div);

    div.addEventListener('dragstart', () => {
        draggedTask = div;
    });

    const deleteBtn =  div.querySelector('button');
    deleteBtn.addEventListener('click', () =>{
        div.remove();
        updateTask();
    })

    return div;
}


function updateTask() {
    columns.forEach(col => {
        const tasks = col.querySelectorAll('.task');
        const count = col.querySelector('.right');

        tasksData[col.id] = Array.from(tasks).map(t => ({
            title: t.querySelector('h2').innerText,
            desc: t.querySelector('p').innerText
        }));

        count.innerHTML = tasks.length;
    });

    localStorage.setItem('tasks', JSON.stringify(tasksData));
}

if (localStorage.getItem('tasks')) {
    tasksData = JSON.parse(localStorage.getItem('tasks')) || {};

    for (const col in tasksData) {
        const column = document.querySelector(`#${col}`);

        tasksData[col].forEach(task => {
            addTask(task.title, task.desc, column);
        });
    }
    updateTask();
}


const tasks = document.querySelectorAll('.task');
tasks.forEach(task => {
    task.addEventListener('drag', (e) => {
        // console.log('dragging', e);
        draggedTask = task;
    });
})


function addDragAndDropHandlers(column) {
    column.addEventListener('dragenter', (e) => {
        e.preventDefault();
      column.classList.add('hover-over');
})
    column.addEventListener('dragleave', (e) => {
        e.preventDefault();
        column.classList.remove('hover-over');
    })
    column.addEventListener('dragover', (e) => {
        e.preventDefault();
    })
  column.addEventListener('drop', (e) => {
    e.preventDefault();
    column.appendChild(draggedTask);
    column.classList.remove('hover-over');
    updateTask();
});

}
addDragAndDropHandlers(todo);
addDragAndDropHandlers(progress);
addDragAndDropHandlers(done);



const toggleModalBtn = document.querySelector('#toggle-modal');
const modalBg = document.querySelector('.modal .bg');
const modal = document.querySelector('.modal');
const addTaskButton= document.querySelector('#add-new-task');
toggleModalBtn.addEventListener('click', () => {
    modal.classList.toggle('active');
})
modalBg.addEventListener('click', () => {
    modal.classList.remove('active');
})
addTaskButton.addEventListener('click', () => {
    const taskTitle = document.querySelector('#task-title-input').value
    const taskDesc = document.querySelector('#task-desc-input').value

    addTask(taskTitle, taskDesc, todo)
        updateTask();
      modal.classList.remove('active')

      document.querySelector('#task-title-input').value ="";
      document.querySelector('#task-desc-input').value ="";
})