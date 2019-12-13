const express = require('express');

const db = require('./tasks-model');

const router = express.Router();

router.get('/', (req, res) => {
    db.getTasks()
    .then(task => {
    res.json(task);
    })
    .catch(err => {
    console.log(err);
    res.status(500).json({ message: 'Failed to get task' });
    });
});

    router.post('/', (req, res) => {
    const data = req.body;

    db.addTasks(data)
    .then(newTask => {
    res.status(201).json(newTask);
    })
    .catch (err => {
        console.log(err);
    res.status(500).json({ message: 'Failed to create new task' });
    });
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    
        db.removeTasks(id)
        .then(deleted => {
        if (deleted) {
        res.json({ removed: deleted });
        } else {
        res.status(404).json({ message: 'Could not find task with given id' });
        }
        })
        .catch(err => {
        res.status(500).json({ message: 'Failed to delete task' });
        });
});

module.exports = router;