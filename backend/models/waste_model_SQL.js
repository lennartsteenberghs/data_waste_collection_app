import mysql from "mysql2";
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Create the connection pool to the MySQL database
const MYSQL_pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  port: process.env.MYSQL_PORT,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
}).promise();

/**
 * Inserts waste data into the database.
 * Stores information such as waste type, amount, bin ID, and photo ID in the `waste` table.
 */
export async function insertWaste(data, idbin, idphoto) {
  await MYSQL_pool.query(
    "INSERT INTO waste (id_type, amount, id_bin, id_photo) VALUES (?, ?, ?, ?)",
    [data.plastic_type, data.amount, idbin, idphoto]
  );
}

/**
 * Retrieves the next photo ID to be used as a foreign key in the `waste` table.
 * This ID is calculated as the current maximum `id_photo` plus one.
 */
export async function getPhotoid() {
  const photoid = await MYSQL_pool.query(
    "SELECT (MAX(id_photo)+1) AS id FROM waste;"
  );
  return photoid[0][0].id;
}

/**
 * Calculates the CO2 saved based on the specified bin ID.
 * Uses a stored procedure `railway.calculate_CO2` in the database to perform the calculation.
 */
export async function calculate_CO2_safed(idbin) {
  const mot_fact = await MYSQL_pool.query(
    "call railway.calculate_CO2(?)",
    [idbin]
  );
  return mot_fact[0][0][0];
}
