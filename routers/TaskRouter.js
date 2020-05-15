const router = require('express').Router();
const Project = require('../models/ProjectModel');

router.get('/tasks/:id', (req, res) => {
    const {project_id} = req.params.id;
    if(!project_id) {
        return res.status(500).json({message:"Invalid project id. Cannot be null"})
    }
    return Project.getTask(project_id)
        .then(response => {
            res.status(201).json(response)
        })
        .catch(error => {
            console.log(error);
            return res.status(500).json(error)
        })
})

module.exports = router;