const express = require('express');
const app = express();
const ejs = require('ejs');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const router = require('./routes/routes.js');
const fileUpload = require('express-fileupload');
const customMiddleware = require('./middleware/customMiddleware');

const session = require('express-session');

app.use(express.static('public'));
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());
app.use(customMiddleware);

app.use(session({
    secret: "A secret String to sign the cookie",
    resave: false,
    saveUninitialized: false
}))
app.use(router);


app.set('view engine', 'ejs');

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


