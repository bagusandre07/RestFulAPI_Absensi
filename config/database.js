const mysql = require('mysql2');

var connect = mysql.createConnection({
    host:"containers-us-west-77.railway.app",
    user:"root",
    password:"drhzHe53UfZXpdQNVKiq",
    database:"railway",
    port:"7186",

});

module.exports = connect;   
