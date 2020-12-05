const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown")

// array of questions for user
const questions = [
    {
      type: "input",
      message: "What is the title for your project?",
      name: "Title",
    },
    {
      type: "input",
      message: "Please give description of your project.",
      name: "Description",
    },
    {
        type: "input",
        message: "Preview Image/ Video Link:",
        name: "Preview",
      },
    {
      type: "checkbox",
      message: "This project was build with:",
      choices: [
          'HTML ',
          '[Bootstrap](https://getbootstrap.com/) ',
          'CSS ',
          '[JavaScript](javascript.com) ',
          '[Moment](https://momentjs.com/) ',
          '[Jquery](https://api.jquery.com/) ',
          '[Node.JS](https://nodejs.org/) '],
      name: "Build",
    },
    {
        type: "checkbox",
        message: "Does this project includes any Tests?",
        choices: [
            'YES ',
            'NO'],
        name: "Tests",
      },
    {
        type: "input",
        message: "Any Requirements:",
        name: "Requirements",
      },
    {
        type: "input",
        message: "Please add contributors",
        name: "Contributors",
      },
    {
        type: 'list',
        message: "Choose a license for your project.",
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public LicenMomse 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
        name: 'License'
    },
    {
      type: "input",
      message: "What is your GitHub Username?",
      name: "UserName",
    },
    {
        type: "input",
        message: "What is your email?",
        name: "Email",
      }
  ];
    

// function to write README file
function writeToFile(fileName, data) {

   fs.writeFile("./new/"+fileName, data, function(err){
    if (err){
        return console.log(err);
    }
  console.log("Successfully built: " + fileName);
   })
        
}

// function to initialize program
function init(){
    inquirer.prompt(questions)
    .then(function(data) {
      writeToFile("README.md", generateMarkdown(data));
    })

}

// function call to initialize program
init();
