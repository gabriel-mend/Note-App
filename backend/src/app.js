const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app  = express();
mongoose.connect('mongodb+srv://admin:admin@noteapp.pxps5.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority',{
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useCreateIndex: true,
    useFindAndModify: false
});

app.use(routes);

module.exports = app;