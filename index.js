// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js")

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "user",
    },

    {
        type: "input",
        message: "What is your email?",
        name: "email",
    },

    {
        type: "input",
        message: "What is your project title?",
        name: "title",
    },

    {
        type: "input",
        message: "Please write a short description of your project: ",
        name: "description",
    },

    {
        type: "input",
        message: "Please list your installation instructions: ",
        name: "install",
    },

    {
        type: "input",
        message: "Please list the application's usage instructions: ",
        name: "usage",
    },

    {
        type: "input",
        message: "Please list the application's test instructions: ",
        name: "tests",
    },

    {
        type: "input",
        message: "What does the user need to know about contributing to the repo? ",
        name: "contributing",
    },

    {
        type: "list",
        message: "Please choose a license option: ",
        name: "license",
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
    },

];

inquirer
    .prompt(questions)
    .then((answers) => {
        const readMeContent = generateMarkdown.generateMarkdown(answers)
        fs.writeFile('./md/README.md', readMeContent, (err) =>
            err ? console.log(err) : console.log('Successfully created README!')
        );
    })