//import express
import express from "express";

//import functions from controller
import {
  createWaste,
  showMotivationfact,
  showwastesorts
} from "../controllers/waste_controller.js";

//init express router
const router = express.Router();

// Create waste Data
router.post("/wasteinput/:idbin", createWaste);

//get motivation fact
router.get("/co2safed/:idbin", showMotivationfact);

//get all waste types
router.get("/wastetypes", showwastesorts)

//export default router
export default router;
