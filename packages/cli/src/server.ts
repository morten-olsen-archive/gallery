import express from "express";
import webpack from "webpack";
import webpackDevMiddleware from "webpack-dev-middleware";
import webpackHotMiddleware from "webpack-hot-middleware";
import createWebpackConfig, { WebpackConfig } from "./createWebpack";
import createProxy from "./proxy";

const createServer = (webpackConfig: WebpackConfig) => {
  const config = createWebpackConfig({
    ...webpackConfig,
    proxyUrl: "/proxy",
  });
  const bundler = webpack(config);
  const server = express();
  const proxy = createProxy();
  const devMiddleware = webpackDevMiddleware(bundler);
  const hotMiddleware = webpackHotMiddleware(bundler);

  server.use("/proxy", proxy);
  server.use(devMiddleware);
  server.use(hotMiddleware);

  return server;
};

export default createServer;
