import matchRoutes from "./matchRoutes";
import statsRoutes from "./statsRoutes";
import { Express } from "express-serve-static-core";

export = (app: Express) => {
  app.use("/match", matchRoutes);
  app.use("/stats", statsRoutes);
};
