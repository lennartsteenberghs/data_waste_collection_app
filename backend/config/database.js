import mysql from "mysql2";

//create the connection to database
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Umoeder1",
  database: "waste_db",
});

export default db;
