//Included packages needed for this application

const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");

//data object to keep things all collected in one place
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

  assignment(data, values) {
    data.title = values.title;
    data.descriptionContent = values.description;
    data.installationContent = values.installation;
    data.contributionContent = values.contribution;
    data.testingContent = values.testing;
    data.licenseContent = values.license;
    data.reachMe = values.reachMe;
    data.questions = values.questions;
    data.github = values.github;
    data.email = values.email;
  },
};
//An array of questions for user input
const prompts = [
  {
    name: "title",
    type: "text",
    message: "Please Enter the title of your Project",
  },
  {
    name: "description",
    type: "text",
    message: "Please Enter a Description of your Project",
  },
  {
    name: "installation",
    type: "text",
    message: "Please Enter your Installation Instructions",
  },
  {
    name: "contributions",
    type: "text",
    message: "Please Enter the Contribution Guidelines",
  },
  {
    name: "testing",
    type: "text",
    message: "Please Enter the Testing Instructions",
  },
  {
    name: "license",
    type: "text",
    message: "Please Enter the License Information",
  },
  {
    name: "questions",
    type: "text",
    message:
      "Please Enter instructions on how people can reach you for Questions",
  },
  {
    name: "reachMe",
    type: "text",
    message: "Please Enter Instructions on how people should contact you",
  },
  {
    name: "github",
    type: "text",
    message: "Please Enter your GitHub username",
  },
  {
    name: "email",
    type: "text",
    message: "Please Enter your Email Address",
  },
];

//Function writes the information provided into a file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function (err) {
    if (err) {
      throw err;
    }
    console.log("completed");
  });
}
async function questionPrompt(data, prompts) {
  const answers = await inquirer.prompt(prompts).then((answers) => {
    data.assignment(data, answers);
  });
}

//This function initializes the app
function init() {
  questionPrompt(data, prompts);
  let markdown = generateMarkdown(data);
  writeToFile("README.md", markdown);
}

// Function call to initialize app
init();
