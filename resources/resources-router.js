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

module.exports = router;