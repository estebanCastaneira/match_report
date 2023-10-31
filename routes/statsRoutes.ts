import { getStats } from "../controllers/statsController";
import express from "express";

const router = express.Router();

router.get("/", getStats);

export default router;
