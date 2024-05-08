const fs = require('fs');
const path = require('path');

const iconsDir = './src/icons';
const indexPath = './src/index.js';

// Read all files in the icons directory
fs.readdir(iconsDir, (err, files) => {
  if (err) {
    console.error('Error reading icons directory:', err);
    return;
  }

  // Filter out non-JavaScript files
  const jsFiles = files.filter(file => path.extname(file) === '.js');

  // Generate export statements for each icon file
  const exportStatements = jsFiles.map(file => {
    const iconName = path.basename(file, '.js');
    return `export { default as ${iconName} } from './icons/${iconName}';`;
  });

  // Join export statements into a single string
  const exportContent = exportStatements.join('\n');

  // Write export statements to the index.js file
  fs.writeFile(indexPath, exportContent, err => {
    if (err) {
      console.error('Error writing to index.js:', err);
      return;
    }
    console.log('Export statements added to index.js successfully!');
  });
});
