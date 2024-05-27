import express from "express";
import { homePage } from "../controllers/index.controller.js";
import { workingHours } from "../controllers/workingHours.controller.js";

const router = express.Router();

router.get("/", workingHours, homePage);
export default router;