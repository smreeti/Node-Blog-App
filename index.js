const express = require('express');
const app = express();
const ejs = require('ejs');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const router = require('./routes/routes.js');

app.use(router);
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.listen(4000, () => {
    console.log("App is listening to port 4000");
})

//middle ware to handle the requests from Mongodb
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb+srv://smriti:mongodb@cluster0.v3tjgvx.mongodb.net/Employees_Rogers?retryWrites=true&w=majority',
    { useUnifiedTopology: true, useNewUrlParser: true }, (error) => {
        if (error) {
            console.log(error);
            console.log("Connection failed");
        } else {
            console.log("Connected to the database");
        }
    });