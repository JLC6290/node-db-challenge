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
    return db('tasks')
        .where('tasks.project_id', '=', id)
        .join('projects', 'projects.id', '=', id)
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