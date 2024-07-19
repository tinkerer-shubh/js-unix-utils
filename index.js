const fs = require('fs');
const path = require('path');

const commandsDir = path.join(__dirname, 'src');

// Dynamically load all command modules
const commands = {};
fs.readdirSync(commandsDir).forEach(file => {
    const commandName = path.basename(file, '.js');
    commands[commandName] = require(path.join(commandsDir, file));
});

// Parse command-line arguments
const [,, command, ...args] = process.argv;

// Execute the command if it exists
if (commands[command]) {
    commands[command](args);
} else {
    console.error(`Unknown command: ${command}`);
    console.log('Available commands:', Object.keys(commands).join(', '));
}
