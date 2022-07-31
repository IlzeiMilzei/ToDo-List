const values = []

document.getElementById('push').onclick = function (event) {
    const newTaskInput = document.querySelector('#newtask input')

    if (newTaskInput.value.length == 0) {
        alert("Please Enter the Task!")
    } else if (values.includes(newTaskInput.value)) {
        alert("This task already exists!")
    } else {
        values.push(newTaskInput.value);
        document.getElementById('tasks').innerHTML 
        += `
        <div class="task">
        <span id="taskname">
            ${newTaskInput.value}
        </span>
        </div>
        `;

        newTaskInput.value = '';
    }
}
