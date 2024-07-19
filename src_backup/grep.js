const fs = require('fs');
const readLine = require('readline');

module.exports = async function grep(args) {
    if ( args.length < 2) {
        console.error('Usage: grep <pattern> <file>');
        return;
    }

    const [pattern,filePath] =  args;
     const regex = new RegExp(pattern);

     try {
        const fileStream = fs.createReadStream(filepath);
        const rl = readline.createInterface({
            input: fileStream,
            crlfDelay: Infinity
        });

        for await (const line of rl) {
            if (regex.test(line)) {
                console.log(line);
            }
        }
     } catch (err) {
        console.error(`Error: ${err.message}`);
     }
 };