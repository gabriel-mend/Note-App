const { Router } = require('express');

const routes = Router();

routes.get('/', (req, res) => {
    return res.send("NoteApp-Api version: 1.0");
})

module.exports = routes;