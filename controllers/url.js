import { nanoid } from "nanoid";
import URL from "../models/urls.js"; // Ensure this path is correct

export const handleUrl = async (req, res) => {
  const shortid = nanoid(8);
  // console.log("body", req.body);
  const body = req.body;

  if (!body.url) return res.status(400).json({ msg: "URL is required" });

  try {
    const newUrl = await URL.create({
      shortId: shortid,
      redirectURL: body.url,
      visitHistory: [],
    });
    console.log("url in controller");
    res.json(newUrl);
  } catch (error) {
    console.error("Error creating URL:", error.message);
    console.error("Stack Trace:", error.stack);
    res.status(500).json({ msg: "Internal server error" });
  }
};

export const handleShortUrl = async (req, res) => {
  const shortId = req.params.shortId;
  console.log("shortID", shortId);

  // Perform the database lookup first
  const result = await URL.find({ shortId });
  console.log("res", result);

  if (!result) {
    return res.status(404).json({ msg: "URL not found" });
  }

  res.setHeader("Content-Type", "application/json");
  return res.json({
    shortId: shortId,
    totalClicks: result.visitHistory.length,
    analytics: result.visitHistory,
  });
};
