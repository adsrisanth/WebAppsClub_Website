const mysql = require("mysql2/promise");

const connection = mysql.createPool({
  host: process.env.MySQL_HOSTNAME,
  database: process.env.MySQL_DB,
  user: process.env.MySQL_USERNAME,
  password: process.env.MySQL_PASSWORD,
  waitForConnections: true,
});

connection
  .getConnection()
  .then((connection) => {
    // Use the connection
    console.log("Connection ID:", connection.threadId);
    connection.release();
  })
  .catch((error) => {
    console.error("Error acquiring connection:", error.message);
    console.log(error);
  });

module.exports = connection;