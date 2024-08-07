import { Router } from "express";
import { nanoid } from "nanoid";
import express from "express";
import URL from "../models/urls.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const allUrls = await URL.find();
  //   console.log("urls", allUrls);

  res.render("home", {
    urls: allUrls,
  });
});

export default router;
