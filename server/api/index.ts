import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import express from "express";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import { factsRouter } from "./routers/facts.js";
import { connectToDB } from "./middleware/connectToDB.js";
import { swaggerDocs } from "./swagger/config.js";
import { customCss } from "./swagger/css-rewrite.js";

const CSS_URL =
  "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui.min.css";

dotenv.config();

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);
app.use(express.static(path.join(__dirname, "public")));
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocs, { customCss, customCssUrl: CSS_URL })
);
app.use("/api", connectToDB);
app.use("/api/facts", factsRouter);

export default app;
