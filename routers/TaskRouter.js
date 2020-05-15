const router = require('express').Router();
const Project = require('../models/ProjectModel');

router.get('/tasks/projectID=:id', (req, res) => {
    console.log(req.params.id);
    if(!req.params.id) {
        return res.status(500).json({message:"Invalid project id. Cannot be null"})
    }
    return Project.getTask(req.params.id)
        .then(response => {
            res.status(201).json(response)
        })
        .catch(error => {
            console.log(error);
            return res.status(500).json(error)
        })
})

router.post('/tasks/projectID=:id', (req, res) => {
    console.log(req.body);
    if(!req.params.id) {
        return res.status(500).json({message:"Invalid project id. Cannot be null"})
    }
    return Project.addTask(req.body, req.params.id)
        .then(response => {
            res.status(201).json(response)
        })
        .catch(error => {
            console.log(error);
            return res.status(500).json(error)
        })
})



router.get('/tasks', (req, res) => {
    return Project.getAllTasks()
        .then(response => {
            res.status(201).json(response)
        })
        .catch(error => {
            console.log(error);
            return res.status(500).json(error)
        })
})

router.delete('/tasks/taskID=:id', (req, res) => {
    return Project.deleteTask(req.params.id)
        .then(response => {
            res.status(200).json(response)
        })
        .catch(error => {
            console.log(error);
            return res.status(500).json(error)
        })
})

module.exports = router;