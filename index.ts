import express, { Express, Request, Response } from "express";
import cors from "cors";
import router from "./routes";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());
app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
}); // quedamos acá
app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
