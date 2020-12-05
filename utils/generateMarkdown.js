// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.Title}
<h2>Getting Started</h2>
<p>${data.Description}</p>
<h3>Preview:</h3>

<p align="center">
  <img src="${data.Preview}" width="100%" title="${data.Title} Preview">
</p>

# Table of Contents 
  
  * [Installation](#installation)
  
  * [Built&nbsp;With](#builtwith)
  
  * [Contributing](#contributing)
  
  * [License](#license)
  
  * [Questions](#questions)

# Installation

To install this code, download the zip file, or use GitHub's guidelines to clone the repository.

# Built&nbsp;With

* ${data.Build}

# Contributing

* ${data.Contributor}


# License

This project is license under the ${data.License} license.
  

# Questions
  
If you have any questions about the repo, open an issue or contact ${data.UserName} directly ${data.Email}.
`;
}

module.exports = generateMarkdown;
