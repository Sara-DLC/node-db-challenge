const express = require('express');

const db = require('./resources-model');

const router = express.Router();

router.get('/', (req, res) => {
    db.getResources()
    .then(resource => {
    res.json(resource);
    })
    .catch(err => {
    console.log(err);
    res.status(500).json({ message: 'Failed to get resource' });
    });
});

    router.post('/', (req, res) => {
    const data = req.body;

    db.addResources(data)
    .then(newResource => {
    res.status(201).json(newResource);
    })
    .catch (err => {
        console.log(err);
    res.status(500).json({ message: 'Failed to create new resource' });
    });
});


router.delete('/:id', (req, res) => {
    const { id } = req.params;
    
        db.removeResources(id)
        .then(deleted => {
        if (deleted) {
        res.json({ removed: deleted });
        } else {
        res.status(404).json({ message: 'Could not find resource with given id' });
        }
        })
        .catch(err => {
        res.status(500).json({ message: 'Failed to resource task' });
        });
});

module.exports = router;