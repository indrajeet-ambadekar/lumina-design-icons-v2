const fs = require("fs");
const path = require("path");

const svgIconsDir = "./svg-icons";
const reactIconsDir = "./src/icons";

// Ensure the react icons directory exists
if (!fs.existsSync(reactIconsDir)) {
  fs.mkdirSync(reactIconsDir, { recursive: true });
} else {
  // Delete all files and folders within the react icons directory
  // deleteFolderRecursive(reactIconsDir);
}

// Read all SVG files in the svg-icons directory
fs.readdir(svgIconsDir, (err, files) => {
  if (err) {
    console.error("Error reading SVG icons directory:", err);
    return;
  }

  // Process each SVG file
  files.forEach((file) => {
    if (file !== ".DS_Store") {
      // Ignore .DS_Store file on macOS
      const iconName = getIconName(file); // Get the icon name
      const svgContent = fs.readFileSync(path.join(svgIconsDir, file), "utf8");
      const cleanedSvgContent = cleanSvgContent(svgContent);
      const reactComponentContent = generateReactComponent(
        iconName,
        cleanedSvgContent,
      );
      const reactIconFilePath = path.join(
        reactIconsDir,
        `${iconName.charAt(0).toUpperCase()}${iconName.slice(1)}.js`,
      );

      // Write the generated React component to a new file
      fs.writeFileSync(reactIconFilePath, reactComponentContent);

      console.log(`Generated React icon component for ${iconName}`);
    }
  });
});

// Function to generate the React component content
function generateReactComponent(iconName, svgContent) {
  return `import React from 'react';
  /* eslint-disable */
const ${iconName.charAt(0).toUpperCase()}${iconName.slice(1)}Icon = (props) => (
  <React.Fragment><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    ${svgContent}
  </svg></React.Fragment>
);

export default ${iconName.charAt(0).toUpperCase()}${iconName.slice(1)}Icon;
`;
}

// Function to clean up SVG content
function cleanSvgContent(svgContent) {
  // Remove XML declaration and comments
  const cleanedContent = svgContent.replace(/<\?xml.*?\?>|<!--.*?-->/gs, "");
  // Remove nested SVG tag
  return cleanedContent.replace(/<svg .*?>(.*?)<\/svg>/gs, "$1");
}

// Function to extract icon name from file name
function getIconName(fileName) {
  let iconName = path.basename(fileName, ".svg"); // Remove file extension
  iconName = iconName.replace(/^icon_/, ""); // Remove 'icon_' prefix
  iconName = iconName.replace(/[-_](.)/g, (_, char) => char.toUpperCase()); // Convert hyphens and underscores to camelCase and capitalize

  // Check if iconName starts with a number
  if (/^\d/.test(iconName)) {
    iconName = `Icon${iconName}`;
  }

  return iconName;
}

// Function to recursively delete a directory and its contents
function deleteFolderRecursive(folderPath) {
  if (fs.existsSync(folderPath)) {
    fs.readdirSync(folderPath).forEach((file) => {
      const curPath = path.join(folderPath, file);
      if (fs.lstatSync(curPath).isDirectory()) {
        // Recursively delete subdirectories
        deleteFolderRecursive(curPath);
      } else {
        // Delete file
        fs.unlinkSync(curPath);
      }
    });
    fs.rmdirSync(folderPath); // Delete the directory itself
  }
}
