// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");


// TODO: Create an array of questions for user input
const questions = [
    {type: "input",
    message: "What is your github username?",
    name: "userName"
    },

    {type:"input",
        message:"What iss your email address?",
       name: "userEmail"
    },

    {type:"input",
        message:"What iss your email address?",
       name: "title"
    },

    {type:"input",
        message:"Write a short description of your project?",
       name: "description"
    },

    {type:"input",
        message:"What type of license should your project have?",
       name: "license"
    },

    {type:"input",
        message:"What comman should be run to run the dependenncies?",
       name: "command"
    },

    {type:"input",
        message:"What command should be run to run the test?",
       name: "test"
    },

    {type:"input",
        message:"What does the user need to know about the repo?",
       name: "usage"
    },

    {type:"input",
        message:"What does the user need to know about contributing to the repo?",
       name: "contributing"
    },


];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeToFile(fileName,data, (err) => err
     ? console.error(err)
     : console.log('Success!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((response) => {
        let markdown  = generateMarkdown(response)
        let license = response.license
        writeToFile('test.md', markdown)
    }
)
}

// Function call to initialize app
init();
