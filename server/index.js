// index.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import explainRoutes from "./routes/explain.js"; // ✅ use import, and add .js

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/explain", explainRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
