var mysql = require('mysql');


const connection = mysql.createConnection({
    host: "localhost",
    user: "sanjay",
    password: "Sanjay@575004",
    database: "node_demo"
});

connection.connect((err)=> {
    if(err) throw err;
    console.log('connected....');
});