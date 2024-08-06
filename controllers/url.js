import { nanoid } from "nanoid";
import URL from "../models/urls.js"; // Ensure this path is correct

export const handleShortUrl = async (req, res) => {
  const shortid = nanoid(8);
  console.log("body", req.body);
  const body = req.body;

  if (!body.url) return res.status(400).json({ msg: "URL is required" });

  try {
    const newUrl = await URL.create({
      shortId: shortid,
      redirectURl: body.url,
      visitHistory: [],
    });
    const data = db.urls.find({ shortId: "'zUm2Fd5-'" });
    console.log("data", data);

    console.log("url in controller");
    res.json(newUrl);
  } catch (error) {
    console.error("Error creating URL:", error.message);
    console.error("Stack Trace:", error.stack);
    res.status(500).json({ msg: "Internal server error" });
  }
};
