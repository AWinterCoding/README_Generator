// TODO: Include packages needed for this application

const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");

const data = {
  title: "Example",
  description: "Description",
  descriptionContent: "Description Content",
  installation: "Installation",
  installationContent: "Installation Content",
  contribution: "Contribution",
  contributionContent: "Contribution Content",
  testing: "Testing",
  testingContent: "Testing Content",
  license: "License",
  licenseContent: "License Content",
  questions: "Questions",
  reachMe: "ReachMe",
  github: "GitHub UserName",
  email: "Email Address",
};
// TODO: Create an array of questions for user input
const questions = [
  "Please Enter the title of your Project",
  "Please Enter a Description of your Project",
  "Please Enter a Table of Contents",
  "Please Enter your Installation Instructions",
  "Please Enter the Contribution Guidelines",
  "Please Enter the Testing Instructions",
  "Please Enter the License Information",
  "Please Enter instructions on how people can reach you for Questions",
  "Please Enter your GitHub username",
  "Please Enter your Email Address",
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function (err) {
    if (err) {
      throw err;
    }
    console.log("completed");
  });
}

// TODO: Create a function to initialize app
function init() {
  let markdown = generateMarkdown(data);
  writeToFile("README.md", markdown);
}

// Function call to initialize app
init();
