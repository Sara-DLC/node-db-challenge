const db = require('../data/db.config');

module.exports = {
    getTasks,
    addTasks,
    removeTasks
}

function getTasks() {
    return db("tasks").then(tasks =>
        tasks.map(task => {
        return { ...task, completed: !!task.completed };
        })
    );
    }


function addTasks(newTask) {
    return db('tasks')
    .insert(newTask)
}


function removeTasks (id) {
    return db('tasks')
    .where('id' , id)
    .del();
}