class Readme{
    constructor(projectTitle, projectDesc, projectInstall, projectUsage, projectContrib, projectTest, projectLicense, username, email){
        this.projectTitle = projectTitle;
        this.projectDesc = projectDesc;
        this.projectInstall = projectInstall;
        this.projectUsage = projectUsage;
        this.projectContrib = projectContrib;
        this.projectTest = projectTest;
        this.projectLicense = projectLicense;
        this.username = username;
        this.email = email;
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
                    this.licenseBadge = "";
                    break;
            }
            
            return `# ${this.projectTitle} ${this.licenseBadge}

## Description

${this.projectDesc}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${this.projectInstall}

## Usage

${this.projectUsage}

## License

${this.projectLicense} - Please refer to the LICENSE in the repo.

## Contributing

${this.projectContrib}

## Tests

${this.projectTest}

## Questions

You can view my Github @ https://www.github.com/${this.username}  
OR  
Email me with questions @ [${this.email}](mailto:${this.email}?subject=Question%20About%20${this.projectTitle}%20App)
    `
        }

    }
}

module.exports = Readme;