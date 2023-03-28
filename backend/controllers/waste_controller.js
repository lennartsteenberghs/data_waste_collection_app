//import functions from waste model
import {
  insertWaste,
  calculate_CO2_safed
} from "../models/waste_model.js";

//insert waste into database
export async function createWaste(req, res) {
  const idbin = req.params.idbin;
  const waste = req.body;
  for(let i = 0; i < waste.length; i++) {
    await insertWaste(waste[i], idbin)
  }
  res.send("insertion succeed")
}

//show CO2 safed
export async function showCO2_safed(req, res) {
  const idbin = req.params.idbin;
  const mot_fact = await calculate_CO2_safed(idbin)
  res.send(mot_fact)
};

