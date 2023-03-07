//import functions from waste model
import {
  insertWaste,
  getMotivationfact,
  getwastetypes
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

//get Motivation fact by bin
export async function showMotivationfact(req, res) {
  const idbin = req.params.idbin;
  const mot_fact = await getMotivationfact(idbin)
  res.send(mot_fact)
};

//get waste sorts
export async function showwastetypes(req, res) {
  const waste_sorts = await getwastetypes()
  res.send(waste_sorts)
};
