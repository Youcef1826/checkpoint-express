import express from "express";
import { contactPage } from "../controllers/contact.controller.js";
import { workingHours } from "../controllers/workingHours.controller.js";

const router = express.Router();

router.get("/contact", workingHours, contactPage);
export default router;