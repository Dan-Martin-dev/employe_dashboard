import MiniCssExtractPlugin from "mini-css-extract-plugin";

export default {
  webpack(config, { isServer }) {
    // Only modify for the client-side build
    if (!isServer) {
      config.plugins.push(
        new MiniCssExtractPlugin({
          filename: "static/css/[contenthash].css",
        })
      );
    }
    return config;
  },
};
