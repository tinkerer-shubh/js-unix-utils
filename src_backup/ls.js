const fs = require('fs');
const path = require('path');

module.exports = function ls(args) {
    const dirPath = args[0] || '.';

    try {
        const files = fs.readdirSync(dirPath);
        files.forEach(file => {
            console.log(file);
        });
    } catch(err) {
        console.error(`Error reading directory: ${err.message}`);
    }
};