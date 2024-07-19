const fs = require('fs');
const path = require('path');

module.exports = function cat(args) {
    if (args.length === 0) {
        console.error('Usage: cat <file>');
        return;
    }

    const filePath = path.resolve(args[0]);

    try {
        if (!fs.existsSync(filePath)) {
            console.error(`Error: File '${filePath}' does not exist.`);
            return;
        }

        const content = fs.readFileSync(filePath, 'utf8');
        console.log(content);
    } catch (err) {
        console.error(`Error reading file: ${err.message}`);
    }
};