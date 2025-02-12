// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (license === "Apache 2.0") {
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else if (license === "gpl 3.0") {
    return  "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  } else if (license === BSD) {
    return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
  } else {
    return "";
  }
}



// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'none') {
    return '- [License](#license)';
  } else {
    return '';
  }
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'none') {
    return '## License';
  } else {
    return '';
  }
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
 ##  Description
 ${data.description}

 ## Table of Contents
 *[Installation] (#Installation)
 *[Usage](#Usage)
 *[Contributing](#Contributing)
 *[Tests](#Tests)

 ## Installation

 To install the necessary dependecies, run the following command<br>
 \`\`\`${data.command}\`\`\`

 ## Usage
 ${data.usage}

 # Contributing
 ${data.contributing}

 # Tests
 \`\`\`${data.test}\`\`\`

 # Questions
 If you have any questions about my repo/application, please feel free to open an issue or contact me via email at <${data.userEmail}>. You may also find more of my work at [${data.userName}] (https://github.com/${data.userName})

`
}

module.exports = generateMarkdown;
