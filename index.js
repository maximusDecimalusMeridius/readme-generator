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
const readmeTemplate = `# weather-tracker

## Description

This is a class assignment that required us to build a weather dashboard, query a 3rd party weather API and display the data on the page, then save search history into localStorage.  It meets the following acceptance criteria:

- GIVEN a weather dashboard with form inputs

- WHEN I search for a city, THEN I am presented with current and future conditions for that city and that city is added to the search history
- WHEN I view current weather conditions for that city, THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the wind speed
- WHEN I view future weather conditions for that city, THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
- WHEN I click on a city in the search history, THEN I am again presented with current and future conditions for that city

I added additional functionality to handle additional edge cases:
- Added event listener for input keydown events on 'Enter' & 'Return' to submit query
- Check for duplicates in search history
- Don't repopulate city in search history if a past result is clicked
- Limit search history to 10
- Mousing over a weather icon returns the condition value passed by the API due to poor icon quality

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

Runs in the browser for mobile, tablet, laptop, and PC devices.

## Usage

You can visit the live application at - https://maximusdecimalusmeridius.github.io/weather-tracker.



![site-thumbnail](./assets/images/site-thumbnail.png "Website Thumbnail")

## Credits
Weather data is returned using the OpenWeather API found at https://openweathermap.org/

## License

MIT License - Please refer to the LICENSE in the repo.

This favicon was generated at favicon.io using the following font:
- Font Title: Leckerli One
- Font Author: Copyright (c) 2011 Gesine Todt (www.gesine-todt.de), with Reserved Font Names "Leckerli"
- Font Source: http://fonts.gstatic.com/s/leckerlione/v16/V8mCoQH8VCsNttEnxnGQ-1itLZxcBtItFw.ttf
- Font License: SIL Open Font License, 1.1 (http://scripts.sil.org/OFL))
`

//Get user input for Project Title, Description, Installation, Usage, License, Contributing, Tests, and Questions

inquirer.prompt([
    {
        type: "input",
        message: "Please enter your Project Title: ",
        name: projectTitle
    },
    {
        type: "input",
        message: "Please enter a description: (or leave blank and press ENTER for placeholder text)",
        name: projectDesc
    },
    {
        type: "input",
        message: "Please enter installation instructions: (leave blank and press ENTER for placeholder text)",
        name: projectInstall
    },
    {
        type: "input",
        message: "Please enter usage information (leave blank and press ENTER for placeholder text)",
        name: projectUsage
    },
    {
        type: "input",
        message: "Please enter any contribution instructions: ('N' to skip, or leave blank and press ENTER for default text)",
        name: projectContrib
    },
    {
        type: "input",
        message: "Please enter any test instructions: ('N' to skip, or leave blank and press ENTER for default text)",
        name: projectTest
    }
]).then( answers => {

    //Create a README.md file in a directory with the same project title as input above
    
        //Set the project name as the title of the file
        //Update description
        //Update installation instructions
        //Update usage information
        //Update contribution instructions
        //Update test instructions

})