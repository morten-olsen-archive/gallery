import express from "express";
import axios from "axios";

const createProxy = () => {
  const app = express();

  app.get("*", (req, res, next) => {
    const url = req.query.url as string;

    console.log("url", url);

    if (!url) {
      return next(new Error("no url"));
    }

    const headers = {
      ...req.headers,
    };

    console.log(headers);

    delete headers.host;

    axios
      .get(url, {
        headers,
      })
      .then(({ data }) => {
        res.json(data);
      })
      .catch((err) => {
        if (err.response) {
          console.error(err.response.data);
        }
        next(err);
      });
  });

  return app;
};

export default createProxy;
