import URL from "../models/urls.js";

export const handleURLAnalytic = async (req, res) => {
  const shortId = req.params.shortId;
  console.log("shortID", shortId);

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
