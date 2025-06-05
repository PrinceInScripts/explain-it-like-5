import express from "express";
const router = express.Router();

import { explainText } from "../controllers/explainController.js"; // ✅ use import, and add .js

router.post("/", explainText);

// Export the router to be used in the main server file
export default router;
