import { TeamStats } from "../types/typesStats";
import { Request, Response } from "express";
import stats from "../data/stats.json";
export async function getStats(
  req: Request,
  res: Response
): Promise<TeamStats | void> {
  try {
    res.json(stats);
  } catch (err) {
    console.log(err);
  }
}
