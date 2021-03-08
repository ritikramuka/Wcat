let chalk = require('chalk');

function help() {
    console.log(chalk.bold.redBright(`General Syntax:`),
        chalk.keyword("orange")(`
    wcat[options][files]`), chalk.whiteBright(`
    
    option to remove big line break (-s)
    option to add line number to non empty lines(-b)
    option to add line numbers to all lines(-n)`), chalk.keyword("orange")(`

    Commands:`), chalk.whiteBright(`

    wcat filename => displays content of the file in the terminal
    wcat filename1 filename2 filename3... => displays content of all files in the terminal(contactinated form) in the given order.
    wcat - s filename => convert big line breaks into a singular file
    wcat - n filename => give numbering to all the lines
    wcat - b filename => give numbering to non - empty lines
    wcat filename > filename2 => put all the content of filename into filename2 by overriding also creates filename2 if it doesn't exist.
    wcat filename >> filename2 => append all the content of filename into filename2
    wcat - s filename > filename2 => get the file content of filename remove large spaces and save the output in filename2`), chalk.italic.keyword("orange")(`

    We can mix and match the options.`));
}

module.exports = {
    fn: help,
};