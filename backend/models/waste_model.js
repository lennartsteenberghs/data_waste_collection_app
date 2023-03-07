//import connection
import pool from "../config/database.js";


//insert waste data to database
export async function insertWaste(data, idbin) {
  await pool.query("INSERT INTO waste (id_type, amount, recycled, id_bin) VALUES (?, ?, ?, ?)",
  [data.plastic_type, data.amount, data.recycled, idbin])
}

//get CO2 safed fact by bin
export async function getMotivationfact(idbin){
  const mot_fact = await pool.query("call railway.calculate_CO2(?)", [idbin])
  return mot_fact[0][0][0]
}

//get all sorts of waste
export async function getwastetypes(){
  const mot_fact = await pool.query("SELECT id_type, name, recyclable FROM railway.type_waste;")
  return mot_fact[0]
}


// //get (random chosen) motivation fact
// export async function getMotivationfact(){
//   const mot_fact = await pool.query("SELECT motivating_fact FROM motivating_facts ORDER BY RAND() LIMIT 1")
//   return mot_fact[0]
// }

