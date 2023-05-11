//A function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    case "GPLv2":
      return "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";
    case "Apache":
      return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    case "GPLv3":
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    case "BSD3-clause":
      return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
    case "Unlicense":
      return "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
    case "BSD 2-clause":
      return "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)";
    case "LGPLv3":
      return "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)";
    case "AGPLv3":
      return "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
    default:
      return "";
  }
}

// A function that returns the license link
function renderLicenseLink(license) {
  switch (license) {
    case "MIT":
      return "This Project is Licensed under the The MIT License";
    case "GPLv2":
      return "This Project is Licensed under the The GNU General Public License, version 2";
    case "Apache":
      return "This Project is Licensed under the The Apache License, Version 2.0";
    case "GPLv3":
      return "This Project is Licensed under the The The GNU General Public License v3.0";
    case "BSD3-clause":
      return "This Project is Licensed under the The 3-Clause BSD License";
    case "Unlicense":
      return "This Project is Licensed under the The Unlicense License";
    case "BSD 2-clause":
      return "This Project is Licensed under the The 2-Clause BSD License";
    case "LGPLv3":
      return "This Project is Licensed under the The GNU Lesser General Public License v3.0";
    case "AGPLv3":
      return "This Project is Licensed under the The GNU Affero General Public License";
    default:
      return "";
  }
}

//A function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch (license) {
    case "MIT":
      return "(https://opensource.org/licenses/MIT)";
    case "GPLv2":
      return "(https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";
    case "Apache":
      return "(https://opensource.org/licenses/Apache-2.0)";
    case "GPLv3":
      return "(https://www.gnu.org/licenses/gpl-3.0)";
    case "BSD3-clause":
      return "(https://opensource.org/licenses/BSD-3-Clause)";
    case "Unlicense":
      return "(http://unlicense.org/)";
    case "BSD 2-clause":
      return "(https://opensource.org/licenses/BSD-2-Clause)";
    case "LGPLv3":
      return "(https://www.gnu.org/licenses/lgpl-3.0)";
    case "AGPLv3":
      return "(https://www.gnu.org/licenses/agpl-3.0)";
    default:
      return "";
  }
}

//A function that generates markdown for README
function generateMarkdown(data) {
  return `${data.licenseBadge}
  
# ${data.title}

## Description

${data.description}

## Table of Contents

*[Installation](#installation)
*[Contributions](#contributions)
*[Testing](#testing)
*[License](#license)
*[Questions](#questions)

## Installation

${data.installation}

## Contribution

${data.contribution}

## Testing

${data.testing}

## License

${data.licenseDescription}
${data.licenseLink}

## Questions

${data.github}

${data.githubURL}

${data.email}
`;
}

module.exports = {
  markdown: generateMarkdown,
  licenseBadge: renderLicenseBadge,
  licenseLink: renderLicenseLink,
  licenseSection: renderLicenseSection,
};
