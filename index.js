const express = require('express');
const app = express();
const ejs = require('ejs');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const router = require('./routes/routes.js');
const fileUpload = require('express-fileupload');

app.use(express.static('public'));
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended:true}));
app.use(fileUpload());

app.set('view engine', 'ejs');
app.use(router);

mongoose.connect('mongodb+srv://smriti:mongodb@cluster0.v3tjgvx.mongodb.net/Employees_Rogers?retryWrites=true&w=majority',
    { useUnifiedTopology: true, useNewUrlParser: true }, (error) => {
        if (error) {
            console.log(error);
            console.log("Connection failed");
        } else {
            console.log("Connected to the database");
        }
    });

app.listen(4000, () => {
    console.log("App is listening to port 4000");
})


