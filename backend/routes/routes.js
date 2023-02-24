//import express
import express from "express";

//import functions from controller
import {
  createWaste,
  showMotivationfact
} from "../controllers/waste_controller.js";

//init express router
const router = express.Router();

// Create waste Data
router.post("/products", createWaste);

//get motivation fact
router.get("/products", showMotivationfact);

//export default router
export default router;
