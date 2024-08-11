const mysql = require('mysql2');
const app =  {
    port: 4000,
    appName: "VedhaSoftTec",
    env: "development",
    server: "localhost"
}
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'sri@sql2018',
  database: 'vedhasoft',
});

connection.connect(err => {
  if (err) {
    console.error('Error connecting to MySQL: ' + err.stack);
    return;
  }
  console.log('Connected to MySQL as id ' + connection.threadId);
});
module.exports = {connection,app};