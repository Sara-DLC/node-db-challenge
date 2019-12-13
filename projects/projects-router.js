const express = require('express');

const db = require('./projects-model');

const router = express.Router();

router.get('/', (req, res) => {
    db.getProjects()
    .then(projects => { 
        res.status(200).json(projects)
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

router.delete('/:id', (req, res) => {
const { id } = req.params;

    db.removeProjects(id)
    .then(deleted => {
    if (deleted) {
    res.json({ removed: deleted });
    } else {
    res.status(404).json({ message: 'Could not find project with given id' });
    }
    })
    .catch(err => {
    res.status(500).json({ message: 'Failed to delete project' });
    });
});

module.exports = router;