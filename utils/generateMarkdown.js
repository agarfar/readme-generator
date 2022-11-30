// Create license badge URL. If there is no license, return an empty string
function renderLicenseBadge(license) {
  const licenseEdit = license.replaceAll(' ', '%20')
  if (license !== 'None') {
    return `![GitHub license](https://img.shields.io/badge/license-${licenseEdit}-blue.svg)`;
  }
  else {
    return '';
  }
}

// Creates license section of README. If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') {
    return '';
  }
  else {
    return `This project is covered under the ${license} license.`;
  }
}
// Generates README template, filling in sections with user input from terminal
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license)
  const licenseSection = renderLicenseSection(data.license)

  return `# ${data.title}
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

Please address all questions regarding this project to the following email: ${data.email}`;
}

// exports out generateMarkdown functions for use in 'index.js'
module.exports = {
  generateMarkdown,
  renderLicenseBadge,
  renderLicenseSection
};
