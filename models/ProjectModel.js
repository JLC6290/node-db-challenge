const db = require('../dbConfig');

module.exports = {
    getResource,
    addResource,
    getProject,
    addProject,
    getTask,
    addTask
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
        .where({project_id: id})
}

function addTask() {

}