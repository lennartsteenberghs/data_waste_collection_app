//import express
import express from "express";

//import multer
import multer from 'multer';

//import functions from controller
import {
  createWaste,
  showCO2_safed, 
  showPhoto
} from "../controllers/waste_controller.js";

const storage = multer.memoryStorage()
const upload = multer({ storage: storage })

//init express router
const router = express.Router();

// Create waste Data
router.post("/wasteinput/:idbin/:photo", upload.single('image'), createWaste);

//get motivation fact
router.get("/co2safed/:idbin", showCO2_safed);

//get photo based on id
router.get('/getphoto/:id', showPhoto);

//export default router
export default router;
