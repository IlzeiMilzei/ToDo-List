const newTaskInput = '#newtask input'

document.getElementById('push').onclick = function () {
    if(document.querySelector(newTaskInput).value.length == 0) {
        alert("Please Enter the Task!")
    } else {
        document.getElementById('tasks').innerHTML 
        += `
        <div class="task">
        <span id="taskname">
            ${document.querySelector(newTaskInput).value}
        </span>
        </div>
        `;
    }
}
