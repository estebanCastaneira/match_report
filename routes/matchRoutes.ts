import { getMatchInfo } from "../controllers/matchController";
import express, { Express } from "express";

const router = express.Router();

router.get("/", getMatchInfo);

export default router;
