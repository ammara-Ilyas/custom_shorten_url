import express from "express";
import { nanoid } from "nanoid";
import path from "path";
import dotenv from "dotenv";
import { connectToMongoDB } from "./db.js";
import URL from "../models/urls.js";
import router from "../route/url.js";

const app = express();

dotenv.config();
const url = process.env.MONGODB_URI;
const PORT = process.env.PORT || 8000;

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));
import { handleURLId } from "../controllers/urlId.js";
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  const short = nanoid(8);
  console.log("home");

  return res.render("home", {
    id: short,
  });
});
app.use("/api", router);
app.use("/api", router);

const startServer = async () => {
  try {
    await connectToMongoDB(url);
    app.listen(PORT, () => {
      console.log("Server running at port", PORT);
    });
  } catch (error) {
    console.error("Failed to start server", error);
  }
};

startServer();
