const path = require("path");
const fs = require("fs");

// Function to get all icon files in the src/icons directory
function getIconFiles() {
  const iconsDir = "./src/icons";
  return fs.readdirSync(iconsDir).filter(file => file.endsWith('.js'));
}

// Dynamically generate the entry object
const entry = {};
getIconFiles().forEach(file => {
  const iconName = path.basename(file, ".js");
  entry[iconName] = `./src/icons/${file}`;
});

module.exports = {
  mode: "production", // Keep the production mode
  entry: entry, // Use the dynamic entry object
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    library: "light-icons",
    libraryTarget: "umd",
    umdNamedDefine: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.svg$/,
        use: ["svg-react-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
};
