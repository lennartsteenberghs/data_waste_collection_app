import mysql from "mysql2";
import dotenv from 'dotenv'
dotenv.config()


//create the connection pool to database
const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  port: process.env.MYSQYL_PORT,
  database: process.env.MYSQL_DATABASE,
}).promise();


export default pool;
