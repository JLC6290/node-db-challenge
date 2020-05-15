const router = require('express').Router();
const Project = require('../models/ProjectModel');

router.get('/projects', (req, res) => {
    return Project.getProject()
        .then(response => {
            res.status(200).json(response);
        })
        .catch(error => {
            console.log(error);
            return res.status(500).json(error)
        })
})

router.post('/projects', (req, res) => {
    const {project_name, project_completed} = req.body;
    if(!project_name || !project_completed) {
        return res.status(500).json({message:"Invalid project_name or project_completed. Cannot be null"})
    }
    return Project.addProject(req.body)
        .then(response => {
            res.status(201).json(response)
        })
        .catch(error => {
            console.log(error);
            return res.status(500).json(error)
        })
})

router.get('/resources', (req, res) => {
    return Project.getResource()
        .then(response => {
            res.status(200).json(response);
        })
        .catch(error => {
            console.log(error);
            return res.status(500).json(error)
        })
})
router.post('/resources', (req, res) => {
    const {resource_name} = req.body;
    if(!resource_name) {
        return res.status(500).json({message:"Invalid resource_name. Cannot be null"})
    }
    return Project.addResource(req.body)
        .then(response => {
            res.status(201).json(response)
        })
        .catch(error => {
            console.log(error);
            return res.status(500).json(error)
        })
})

// router.get('/projects/:id/tasks', (req, res) => {
//     const {project_id} = req.params.id;
//     if(!project_id) {
//         return res.status(500).json({message:"Invalid project id. Cannot be null"})
//     }
//     return Project.getTask(project_id)
//         .then(response => {
//             res.status(201).json(response)
//         })
//         .catch(error => {
//             console.log(error);
//             return res.status(500).json(error)
//         })
// })

module.exports = router;