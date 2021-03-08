let input = process.argv.slice(2);

let fs = require('fs');
let path = require('path');
let chalk = require('chalk');
let helpFile = require('./help');
let removeSpacesFile = require('./removeSpaces');
let numberNonEmptyLine = require('./numberNonEmpty');
let numberAllLine = require('./numberAll');

if (input.length != 0) {
    if (input[0] == 'help') {
        helpFile.fn();
    } else {
        let command = [], file = [], overridingFile, appendFile;
        for (let i = 0; i < input.length; i++) {
            if (input[i].startsWith('-'))
                command.push(input[i]);
            else if (input[i] == '>') {
                overridingFile = input[i + 1];
                break;
            }
            else if (input[i] == '>>') {
                appendFile = input[i + 1];
                break;
            }
            else
                file.push(input[i]);
        }
        let content = '';
        for (let i = 0; i < file.length; i++) {
            if (fs.existsSync(file[i])) {
                let data = fs.readFileSync(file[i]);
                content += data.toString();
                content = content.split("\n");
                if (command.includes('-s'))
                    content = removeSpacesFile.fn(content);

                if (command.includes('-b') && command.includes('-n'))
                    if (command.indexOf('-b') < command.indexOf('-n'))
                        content = numberNonEmptyLine.fn(content);
                    else
                        content = numberAllLine.fn(content);
                else if (command.includes('-b'))
                    content = numberNonEmptyLine.fn(content);
                else if (command.includes('-n'))
                    content = numberAllLine.fn(content);

                content = content.join('\n');

            } else {
                console.log("Invalid path", file[i], "File not found!");
                return;
            }
        }
    }
}
else {
    console.log(chalk.bold.redBright("Invalid command run", chalk.italic.yellowBright('wcat help'), "for help"));
}
