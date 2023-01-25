// Import required libraries
const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");

const Readme = require("./Readme.js");

const mkdir = util.promisify(fs.mkdir);

//Get user input for Project Title, Description, Installation, Usage, License, Contributing, and Tests


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
        message: "Please enter your github username: ",
        name: "username"
    },
    {
        type: "input",
        message: "Please enter your email address: ",
        name: "email"
    },
])
.then( answers => {
    
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
    const projectContrib = (answers.projectContrib === "" ? `[PLACEHOLDER] Remember to update this text!` : answers.projectContrib);

    //Update test instructions
    const projectTest = (answers.projectTest === "" ? `[PLACEHOLDER] Remember to update this text!` : answers.projectTest);

    const template = new Readme(projectTitle, projectDesc, projectInstall, projectUsage, projectContrib, projectTest, answers.projectLicense, answers.username, answers.email);
        
    return [template.buildReadMe(), projectTitle]

})
.then(([template, projectTitle]) => {
    fs.writeFileSync(`./readmes/${projectTitle}/README.md`, template, () => {
    });

})
.then(() => {
    console.log("success");
})