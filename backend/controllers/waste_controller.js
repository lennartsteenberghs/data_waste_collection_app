//import functions from waste model
import {
  insertWaste,
  getMotivationfact
} from "../models/waste_model.js";

//insert waste into database
export async function createWaste(req, res) {
  const idbin = req.params.idbin;
  const waste = req.body;
  console.log(waste)
  for(let i = 0; i < waste.length; i++) {
    await insertWaste(waste[i], idbin)
  }
  res.send("insertion succeed")
}

//get (random) motivation quote
export async function showMotivationfact(req, res) {
  const mot_fact = await getMotivationfact()
  res.send(mot_fact)
};
