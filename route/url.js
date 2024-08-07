import { Router } from "express";
import express from "express";

import { handleUrl } from "../controllers/url.js";
import { handleShortUrl } from "../controllers/urlId.js";
import { handleURLAnalytic } from "../controllers/analytic.js";

const router = express.Router();
console.log("route");

router.post("/url", handleUrl);

router.post("/analytic/:shortId", handleURLAnalytic);

router.get("/:shortId", handleShortUrl);

export default router;
