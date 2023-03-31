//import functions from waste model
import {
  insertWaste,
  calculate_CO2_safed,
  getPhotoid,
} from "../models/waste_model_SQL.js";

import {
  insertPhoto,
  generateLink
} from "../models/photo_model_S3.js";



//create waste
export async function createWaste(req, res) {
  const idbin = req.params.idbin;
  const waste = req.body.list;

  console.log(waste)

  const boolphoto = req.params.photo;
  var idphoto = 0;

  if (boolphoto == 1){ idphoto = await getPhotoid();}
  
  for(let i = 0; i < waste.length; i++) {
    console.log(waste[i])
    await insertWaste(waste[i], idbin, idphoto)
  }

  if (boolphoto == 1){
    const body = req.file.buffer;
    const contenttype = req.file.mimetype;
    await insertPhoto(idphoto, body, contenttype)
  }
  res.send("Waste insertion succeed")
}

//show CO2 safed
export async function showCO2_safed(req, res) {
  const idbin = req.params.idbin;
  const mot_fact = await calculate_CO2_safed(idbin)
  res.send(mot_fact)
};

//redirect to generated link
export async function showPhoto(req, res) {
  const idphoto = req.params.id;
  const link = await generateLink(idphoto)
  res.redirect(link)
};