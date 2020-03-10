require('dotenv').config(); // Loads environment variables from a .env file into the process.env variable
let mysql = require("mysql"); // Requiring mysql package

// Setting up our connection information
let connection;
if (process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else {
  connection = mysql.createConnection({
                                        host: process.env.host,
                                        port: process.env.port,
                                        user: process.env.user,
                                        password: process.env.password,
                                        database: process.env.database
                                      });
}

// Connecting to the database.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Exporting our connection
module.exports = connection;
