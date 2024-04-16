import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import swaggerUi from "swagger-ui-express";
import { factsRouter } from "./routers/facts.js";
import { connectToDB } from "./middleware/connectToDB.js";
import { swaggerDocs } from "./swagger/config.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

dotenv.config();

const app = express();

const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);
app.use(express.static(path.join(__dirname, "public")));
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use("/api", connectToDB);
app.use("/api/facts", factsRouter);

export default app;
