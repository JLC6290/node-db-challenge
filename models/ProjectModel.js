const db = require('../dbConfig');

module.exports = {
    getResource,
    addResource,
    getProject,
    addProject,
    getTask,
    addTask,
    getAllTasks,
    deleteTask
}

function getResource() {
    return db('resources')
}

function addResource(newResource) {
    return db('resources')
        .insert(newResource)
}

function getProject() {
    return db('projects')
}

function addProject(newProject) {
    return db('projects')
        .insert(newProject)
}

function getTask(id) {
    return db.select('t.id', 't.task_description', 't.task_completed', 'p.project_name', 'p.project_description')
        .from('tasks as t')
        .join('projects as p', 'p.id', '=', `t.project_id`)
        .where({project_id: id})
}

function addTask(newTask, id) {
    newTask.project_id = id;
    return db('tasks')
        .insert(newTask)
}
function getAllTasks() {
    return db('tasks')
}

function deleteTask(taskID) {
    return db('tasks')
        .delete(taskID)
}