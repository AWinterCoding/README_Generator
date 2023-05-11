//Included packages needed for this application

const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");
const axios = require("axios");

//data object to keep things all collected in one place
const data = {
  title: "Example",
  description: "Description Content",
  installation: "Installation Content",
  contribution: "Contribution Content",
  testing: "Testing Content",
  licenseBadge: "License Badge",
  licenseLink: "License Link",
  licenseDescription: "License Description",
  github: "GitHub UserName",
  githubURL: "URL",
  email: "Email Address",

  assignment(data, values) {
    data.title = values.title;
    data.description = values.description;
    data.installation = values.installation;
    data.contribution = values.contribution;
    data.testing = values.testing;
    data.licenseBadge = generateMarkdown.licenseBadge(values.license);
    data.licenseLink = generateMarkdown.licenseLink(values.license);
    data.licenseDescription = generateMarkdown.licenseSection(values.license);
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
    name: "contribution",
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
    type: "list",
    message: "Please Enter the License Information",
    choices: [
      "MIT",
      "GPLv2",
      "Apache",
      "GPLv3",
      "BSD3-clause",
      "Unlicense",
      "BSD 2-clause",
      "LGPLv3",
      "AGPLv3",
    ],
  },
  {
    name: "questions",
    type: "text",
    message:
      "Please Enter instructions on how people can reach you for Questions",
  },
  {
    name: "github",
    type: "text",
    message: "Please Enter your GitHub username",
    validate: getGitHubUser,
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

//runs through the questions with inquirer and retrieves the results to utilize later
async function questionPrompt(data, prompts) {
  const answers = await inquirer.prompt(prompts).then((answers) => {
    data.assignment(data, answers);
    let markdown = generateMarkdown.markdown(data);
    writeToFile("README.md", markdown);
    console.log(data);
  });
}

//grabs the username from the input to grab the url to the github repository dynamically
async function getGitHubUser(input) {
  try {
    const username = input;
    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}`
      );
      console.log(response.data.html_url);
      data.githubURL = response.data.html_url;
      return true;
    } catch (error) {
      if (error.response && error.response.status === 404) {
        console.log("User not found");
      } else {
        console.error("An error occurred:", error);
      }
    }
  } finally {
  }
}

//This function initializes the app
function init() {
  questionPrompt(data, prompts);
}

// Function call to initialize app
init();
