import webpack, { Configuration } from "webpack";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";

interface WebpackConfig {
  configLocation: string;
  development: boolean;
  outputLocation?: string;
  proxyUrl?: string;
}

const createWebpack = ({
  configLocation,
  development,
  outputLocation = path.resolve("./build"),
  proxyUrl,
}: WebpackConfig) => {
  const base: Configuration = {
    mode: development ? "development" : "production",
    entry: [path.join(__dirname, "entry")],
    output: {
      path: outputLocation,
    },
    resolve: {
      extensions: [
        ".web.tsx",
        ".web.ts",
        ".web.jsx",
        ".web.js",
        ".tsx",
        ".ts",
        ".js",
      ],
      alias: {
        "react-native": "react-native-web",
        "react-native-svg": "react-native-svg-web",
        "@expo/vector-icons": "expo-web",
      },
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: "Gallery",
        template: path.join(__dirname, "..", "src", "template.html"),
      }),
      new webpack.DefinePlugin({
        __CONFIG_LOCATION__: JSON.stringify(configLocation),
        ...(proxyUrl ? { __PROXY_URL__: JSON.stringify(proxyUrl) } : {}),
      }),
      new BundleAnalyzerPlugin({
        analyzerMode: "json",
        openAnalyzer: false,
      }),
    ],
    module: {
      rules: [
        {
          test: /\.(j|t)sx?$/,
          loader: "babel-loader",
          options: {
            sourceType: "unambiguous",
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
            plugins: [
              "react-hot-loader/babel",
              "@babel/plugin-proposal-class-properties",
              "@babel/plugin-transform-runtime",
            ],
          },
        },
        {
          test: /\.ttf$/,
          loader: "file-loader",
        },
      ],
    },
  };

  if (development) {
    base.entry = [
      "webpack-hot-middleware/client",
      "react-hot-loader/patch",
      ...(base.entry as string[]),
    ];
    base.resolve!.alias!["react-dom"] = "@hot-loader/react-dom";
    base.plugins = [
      new webpack.HotModuleReplacementPlugin(),
      ...(base.plugins || []),
    ];
  }

  return base;
};

export { WebpackConfig };

export default createWebpack;
