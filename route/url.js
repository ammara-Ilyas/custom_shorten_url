import { Router } from "express";
import express from "express";

import { handleShortUrl, handleUrl } from "../controllers/url.js";
import { handleURLId } from "../controllers/urlId.js";
const router = express.Router();
console.log("route");

router.post("/url", handleUrl);

router.post("/analytic/:shortId", handleShortUrl);

router.get("/url/:shortId", handleURLId);

export default router;
