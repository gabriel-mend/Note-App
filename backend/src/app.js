const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');


const app  = express();
mongoose.connect('mongodb+srv://admin:admin@noteapp.pxps5.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority',{
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useCreateIndex: true,
    useFindAndModify: false
});

app.use(cors());
app.use(express.json());
app.use(routes);

module.exports = app;