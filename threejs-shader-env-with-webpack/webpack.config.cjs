module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: `${__dirname}/dist`,
    filename: "bundle.js"
  },
  devServer: {
    static: "./dist",
  },
  resolve: {
    extensions: [".js", ".glsl"],
  },
  module: {
    rules: [
      //Javascript
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      // shader
      {
        test: /\.(glsl|vs|fs|vert|frag)$/,
        type: "asset/source",
        generator: {
          filename: "assets/images/[hash][ext]",
        },
      },
      //Images
      {
        test: /\.(jpg|png|gif|svg)$/,
        type: "asset/resource",
        generator: {
          filename: "assets/images/[hash][ext]",
        },
      },
      // css
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  }
}
