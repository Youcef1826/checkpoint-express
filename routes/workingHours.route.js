// Externals import
import express from 'express';
import { workingHours } from "../controllers/workingHours.controller.js";

const router = express.Router();

router.get("/closed", workingHours, (req, res) => {
    
  res.render("closed")
});

export default router;