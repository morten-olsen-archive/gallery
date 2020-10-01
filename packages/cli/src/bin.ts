import commander from "commander";
import webpack from "webpack";
import path from "path";
import createServer from "./server";
import createWebpack from "./createWebpack";

const dev = commander.command("dev <config>");
dev.option("--port <port>", "port", parseInt);
dev.action((configLocation: string, { port = 4000 }) => {
  const server = createServer({
    configLocation: path.resolve(configLocation),
    development: true,
  });
  server.listen(port, () => {
    console.log(`Development server started on port ${port}`);
  });
});

const build = commander.command("build <config>");
build.option("--output <output>", "directory for output", "./build");
build.action((configLocation: string, { output }) => {
  const config = createWebpack({
    configLocation: path.resolve(configLocation),
    development: false,
    outputLocation: path.resolve(output),
  });
  const bundler = webpack(config);
  bundler.run((err, stats) => {
    if (err) {
      console.error(err);
      return;
    }
    process.stdout.write(stats.toString());
  });
});

commander.parse(process.argv);
