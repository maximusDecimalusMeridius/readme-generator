class Readme{
    constructor(projectTitle, projectDesc, projectInstall, projectUsage, projectContrib, projectTest, projectLicense, projectQuestions){
        this.projectTitle = projectTitle;
        this.projectDesc = projectDesc;
        this.projectInstall = projectInstall;
        this.projectUsage = projectUsage;
        this.projectContrib = projectContrib;
        this.projectTest = projectTest;
        this.projectLicense = projectLicense;
        this.projectQuestions = projectQuestions;
        this.buildReadMe = function(){
            
            switch(projectLicense){
                
                case "GNU GPL v3":
                    this.licenseBadge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
                    break;
                
                case "IBM Public License Version 1.0":
                    this.licenseBadge = "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)";
                    break;
                
                case "ISC License":
                    this.licenseBadge = "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
                    break;

                case "MIT License":
                    this.licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
                    break;
                
                case "Mozilla Public License 2.0":
                    this.licenseBadge = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
                    break;

                default:
                    console.log("whoops");
                    break;
            }
            
            return `# ${this.projectTitle} ${this.licenseBadge}

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

${this.projectInstall}

## Usage

You can visit the live application at - https://maximusdecimalusmeridius.github.io/weather-tracker.

![site-thumbnail](./assets/images/site-thumbnail.png "Website Thumbnail")

## Credits
Weather data is returned using the OpenWeather API found at https://openweathermap.org/

## License

${this.projectLicense} - Please refer to the LICENSE in the repo.
    `
        }

    }
}



module.exports = Readme;