const express = require('express');

const db = require('./projects-model');

const router = express.Router();

router.get('/', (req, res) => {
    db.getProjects()
    .then(projects => {
    res.json(projects);
    })
    .catch(err => {
    console.log(err);
    res.status(500).json({ message: 'Failed to get project' });
    });
});

    router.post('/', (req, res) => {
    const data = req.body;

    db.addProjects(data)
    .then(newProjects => {
    res.status(201).json(newProjects);
    })
    .catch (err => {
        console.log(err);
    res.status(500).json({ message: 'Failed to create new project' });
    });
});

module.exports = router;