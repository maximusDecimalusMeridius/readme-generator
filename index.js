// AS A developer
// I WANT a README generator
// SO THAT I can quickly create a professional README for a new project

// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

// WHEN I enter my project title
// THEN this is displayed as the title of the README

// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests

// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under

// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile

// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions

// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README


// Import required libraries
const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");

const Readme = require("./Readme.js");

const mkdir = util.promisify(fs.mkdir);

//Get user input for Project Title, Description, Installation, Usage, License, Contributing, Tests, and Questions

inquirer.prompt([
    {
        type: "input",
        message: "Please enter your Project Title: ",
        name: "projectTitle"
    },
    {
        type: "input",
        message: "Please enter a description: (or leave blank and press ENTER for placeholder text)",
        name: "projectDesc"
    },
    {
        type: "input",
        message: "Please enter installation instructions: (leave blank and press ENTER for placeholder text)",
        name: "projectInstall"
    },
    {
        type: "input",
        message: "Please enter usage information (leave blank and press ENTER for placeholder text)",
        name: "projectUsage"
    },
    {
        type: "input",
        message: "Please enter any contribution instructions: ('N' to skip, or leave blank and press ENTER for default text)",
        name: "projectContrib"
    },
    {
        type: "input",
        message: "Please enter any test instructions: ('N' to skip, or leave blank and press ENTER for default text)",
        name: "projectTest"
    },
    {
        type: "list",
        message: "Please select a license",
        choices: ["GNU GPL v3", "IBM Public License Version 1.0", "ISC License", "MIT License", "Mozilla Public License 2.0"],
        name: "projectLicense"
    },
    {
        type: "input",
        message: "Please enter any questions: ('N' to skip, or leave blank and press ENTER for default text)",
        name: "projectQuestions"
    }
]).then( answers => {
    
    //Get and clean input
    const projectTitle = answers.projectTitle.trim();
    mkdir(`./readmes/${projectTitle}`)
    
    //Update description
    const projectDesc = (answers.projectDesc === "" ? `[PLACEHOLDER] Remember to update this text!` : answers.projectDesc);

    //Update installation instructions
    const projectInstall = (answers.projectInstall === "" ? `[PLACEHOLDER] Remember to update this text!` : answers.projectInstall);
    
    //Update usage information
    const projectUsage = (answers.projectUsage === "" ? `[PLACEHOLDER] Remember to update this text!` : answers.projectUsage);

    //Update contribution instructions
    if(answers.projectContrib === ""){
        var projectContrib = `[PLACEHOLDER] Remember to update this text!`
    } else if(answers.projectContrib.toLowerCase() === "n"){
        var projectContrib = null;
    } else {
        var projectContrib = answers.projectContrib;
    }

    //Update test instructions
    if(answers.projectTest === ""){
        var projectTest = `[PLACEHOLDER] Remember to update this text!`
    } else if(answers.projectTest.toLowerCase() === "n"){
        var projectTest = null;
    } else {
        var projectTest = answers.projectTest;
    }

    //Update project license
    const projectLicense = answers.projectLicense;

    //Update questions
    if(answers.projectQuestions === ""){
        var projectQuestions = `[PLACEHOLDER] Remember to update this text!`
    } else if(answers.projectQuestions.toLowerCase() === "n"){
        var projectQuestions = null;
    } else {
        var projectQuestions = answers.projectQuestions;
    }

    const template = new Readme(projectTitle, projectDesc, projectInstall, projectUsage, projectContrib, projectTest, projectLicense, projectQuestions);
        
return [template.buildReadMe(), projectTitle]

})
.then(([template, projectTitle]) => {
    fs.writeFileSync(`./readmes/${projectTitle}/README.md`, template, () => {
    });

})
.then(() => {
    console.log("success");
})