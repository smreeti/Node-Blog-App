const express = require('express');
const app = express();
const ejs = require('ejs');
const bodyParser = require('body-parser');

const router = require('./routes/routes.js');

app.use(router);
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.listen(4000, ()=>{
    console.log("App is listening to port 4000");
})
