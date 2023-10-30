import { Match } from "../types/typesMatch";
import { Request, Response } from "express";
import match from "../data/match.json";

export async function getMatchInfo(
  req: Request,
  res: Response
): Promise<Match | void> {
  try {
    res.json(match);
  } catch (err) {
    console.log(err);
  }
}
