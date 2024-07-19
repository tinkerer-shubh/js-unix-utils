const fs = require('fs');
const path = require('path');
const readline = require('readline');

module.exports = async function cat(args) {
    if (args.length === 0) {
        // Read from stdin
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
            terminal: false
        });

        for await (const line of rl) {
            console.log(line);
        }
    } else {
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
    }
};