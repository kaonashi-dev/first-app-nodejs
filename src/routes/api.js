const express = require('express');

const router = express.Router();

const controller = require('../controller/index');

router.get('/', (req, res) => {
    const users = controller.getAll();
    res.json(users);
});

router.get('/:user', (req, res) => {
    const user = controller.get();
    res.json(user);
});

module.exports = router;