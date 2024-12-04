// Import functions from waste and photo models
import {
  insertWaste,
  calculate_CO2_safed,
  getPhotoid,
} from "../models/waste_model_SQL.js";

import {
  insertPhoto,
  generateLink,
} from "../models/photo_model_S3.js";

/**
 * Handles the creation of waste entries.
 * Inserts waste data into the database and, if applicable, uploads a photo to S3.
 */
export async function createWaste(req, res) {
  const idbin = req.params.idbin;
  const waste = JSON.parse(req.body.list);
  const boolphoto = req.params.photo;
  var idphoto = null;

  if (boolphoto == 1) {
    idphoto = await getPhotoid();
  }

  for (let i = 0; i < waste.length; i++) {
    await insertWaste(waste[i], idbin, idphoto);
  }

  if (boolphoto == 1) {
    const body = req.file.buffer;
    const contenttype = req.file.mimetype;
    await insertPhoto(idphoto, body, contenttype);
  }

  res.send("Waste insertion succeeded");
}

/**
 * Retrieves and displays the amount of CO2 saved based on the specified bin ID.
 * Uses a stored procedure to calculate the saved CO2.
 */
export async function showCO2_safed(req, res) {
  const idbin = req.params.idbin;
  const mot_fact = await calculate_CO2_safed(idbin);
  res.send(mot_fact);
}

/**
 * Redirects to a generated temporary link for a photo.
 * The link provides access to the photo stored in S3.
 */
export async function showPhoto(req, res) {
  const idphoto = req.params.id;
  const link = await generateLink(idphoto);
  res.redirect(link);
}
