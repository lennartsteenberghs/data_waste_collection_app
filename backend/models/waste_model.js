//import connection
import pool from "../config/database.js";

//insert waste data to database
export async function insertWaste(data, idbin) {
  await pool.query("INSERT INTO waste (id_type, amount, id_bin) VALUES (?, ?, ?)",
  [data.plastic_type, data.amount, idbin])
}

//get (random chosen) motivation fact
export async function getMotivationfact(){
  const mot_fact = await pool.query("SELECT motivating_fact FROM motivating_facts ORDER BY RAND() LIMIT 1")
  return mot_fact[0]
}

