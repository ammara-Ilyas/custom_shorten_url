import { Router } from "express";
import express from "express";

import { handleShortUrl } from "../controllers/url.js";

const router = express.Router();
console.log("route");

router.post("/", handleShortUrl);

export default router;
