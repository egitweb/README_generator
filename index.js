const inquirer = require("inquirer");
const fs = require("fs");

// array of questions for user
const questions = [
    inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is the project title?",
        },
        {
            type: "input",
            name: "description",
            message: "Write a short description:",
        },
        {
            type: "input",
            name: "installation",
            message: "Write installation process:",
        },
        {
            type: "input",
            name: "contributing", 
            message: "Who are the contributors on this project?",
        },
        {
            type: "list",
            name: "license", 
            message: "Chose a license:",
            choices: [
                "MIT",
                "Apache",
                "GPL"
            ]
        },
        
    ])

];

// function to write README file
function writeToFile(fileName, data) {

}

// function to initialize program
function init() {

}

// function call to initialize program
init();
