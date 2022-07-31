document.querySelector('#push').onclick = function () {
    if(document.querySelector('#newtask input').value.length == 0) {
        alert("Please Enter the Task!")
    } else {
        document.getElementById('tasks').innerHTML 
        += `
        <div class="task">
        <span id="taskname">
            ${document.querySelector('#newtask input').value}
        </span>
        </div>
        `;
    }
}
