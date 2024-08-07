import { nanoid } from "nanoid";
import URL from "../models/urls.js";

export const handleUrl = async (req, res) => {
  // console.log("body", req.body);
  const body = req.body;

  if (!body.url) {
    return res.status(400).json({ msg: "URL is required" });
  } else {
    try {
      const shortid = nanoid(8);
      const newUrl = await URL.create({
        shortId: shortid,
        redirectURL: body.url,
        visitHistory: [],
      });
      console.log("url in controller");
      const allUrls = await URL.find();
      res.render("home", {
        id: newUrl.shortId,
        urls: allUrls,
      });
    } catch (error) {
      console.error("Error creating URL:", error.message);
      console.error("Stack Trace:", error.stack);
      res.status(500).json({ msg: "Internal server error" });
    }
  }
};
