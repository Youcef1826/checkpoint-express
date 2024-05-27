import express from "express";
import { servicesPage } from "../controllers/services.controller.js";
import { workingHours } from "../controllers/workingHours.controller.js";

const router = express.Router();

router.get("/services", workingHours, servicesPage);
export default router;