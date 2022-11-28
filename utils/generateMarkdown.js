// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const licenseEdit = license.replaceAll(' ', '_')
  if (license !== 'None') {
    return `![GitHub license](https://img.shields.io/badge/license-${licenseEdit}-blue.svg)`;
  }
  else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {

// }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') {
    return '';
  }
  else {
    return `This project is covered under the ${license} license.`;
  }
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license)
  const licenseSection = renderLicenseSection(data.license)

  return `#${data.title}
  ${licenseBadge}
  
  ## Description
  
  ${data.description}
  
  ## Table of Contents 
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  
  ${data.install}

  ## Usage
  
  ${data.usage}
  
  ## License
  
  ${licenseSection}
  
  ## Contributing
  
  ${data.contributing}
  
  ## Tests
  
  ${data.tests}
  
  ## Questions
  
  Github Profile: https://github.com/${data.user}

  Please address all questions regarding this project to the following email: ${data.email}

  `;
}

module.exports = {
  generateMarkdown,
  renderLicenseBadge,
  // renderLicenseLink,
  renderLicenseSection
};
