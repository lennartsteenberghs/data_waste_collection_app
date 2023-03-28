//import connection
import MYSQL_pool from "../config/MYSQL_DB.js";


//insert waste data to database
export async function insertWaste(data, idbin) {
  await MYSQL_pool.query("INSERT INTO waste (id_type, amount, id_bin) VALUES (?, ?, ?)",
  [data.plastic_type, data.amount, idbin])
}

//Calculate CO2_safed
export async function calculate_CO2_safed(idbin){
  const mot_fact = await MYSQL_pool.query("call railway.calculate_CO2(?)", [idbin])
  return mot_fact[0][0][0]
}


