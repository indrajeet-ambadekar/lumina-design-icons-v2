const fs = require('fs');
const path = require('path');

const sourceFolder = 'svg-icons';
const destinationFolder = 'svg-icons-renamed';

// Create destination folder if it doesn't exist
if (!fs.existsSync(destinationFolder)) {
    fs.mkdirSync(destinationFolder);
}

fs.readdir(sourceFolder, (err, files) => {
    if (err) {
        console.error('Error reading directory:', err);
        return;
    }

    files.forEach(file => {
        if (file.startsWith('icon_')) {
            const oldPath = path.join(sourceFolder, file);
            let newName = file.substring(5); // Remove 'icon_' from filename

            // Check if the filename starts with a number
            if (/^\d/.test(newName)) {
                newName = `icon_${newName}`;
            }

            const newPath = path.join(destinationFolder, newName);
            
            fs.copyFile(oldPath, newPath, err => {
                if (err) {
                    console.error('Error copying file:', err);
                } else {
                    console.log(`File ${file} copied and renamed to ${newName}`);
                }
            });
        }
    });
});
