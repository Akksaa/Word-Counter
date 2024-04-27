import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bgCyanBright(chalk.black(`\n WELCOME TO AQSA'S WORDS AND LETTERS COUNTER:\n`)));
let condition = true;
while (condition) {
    let counter = await inquirer.prompt([{
            name: "option",
            type: "list",
            message: "What do you want to do? Choose an option:",
            choices: ["Count Words in Text", "Count Letters in Text"],
        }]);
    if (counter.option == "Count Words in Text") {
        let counter = await inquirer.prompt([{
                name: "wordCounter",
                type: "input",
                message: "Write here:"
            }]);
        let words = counter.wordCounter.match(/\w+/g).length;
        console.log(chalk.bgYellowBright(chalk.black(`\n There are total`, chalk.blueBright(`${words}`), `Words in your Text.\n`)));
    }
    else {
        let counter = await inquirer.prompt([{
                name: "letterCounter",
                type: "input",
                message: "Write here:"
            }]);
        let letters = [...counter.letterCounter.split(' ').join('')];
        let lettersLength = letters.length;
        console.log(chalk.bgYellowBright(chalk.black(`\nThere are total`, chalk.blueBright(`${lettersLength}`), `letters in your text.\n`)));
    }
    ;
    let lastQuestion = await inquirer.prompt([{
            name: "continueOrNot",
            type: "confirm",
            message: "Do you want to continue?",
            default: "true",
        }]);
    condition = lastQuestion.continueOrNot;
    if (condition == false) {
        console.log(chalk.bgMagenta(`\n THANK YOU FOR VISITING!`));
    }
    ;
}
;
