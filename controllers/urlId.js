import URL from "../models/urls.js";

export const handleURLId = async (req, res) => {
  const shortId = req.params.shortId;
  //   console.log("short id in controller", shortId);

  const entry = await URL.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        visitHistory: {
          timestamp: Date.now(),
        },
      },
    }
  );
  console.log(entry);

  res.redirect(entry.redirectURL);
};
