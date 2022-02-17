require('dotenv').config(); // require('dotenv').config({path: 'your_path/.env'}); 

var fs = require('fs')
const express = require("express");
const morgan = require("morgan");
const path = require('path')

const app = express();


const db = require("./utils/database");

const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })

app.use(morgan('combined', { stream: accessLogStream }))

app.get('/', function (req, res) {
    res.send('hello, world!')
  })

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`app strated running at port ${port}`);
});

