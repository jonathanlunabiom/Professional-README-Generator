const inquirer = require('inquirer');
const fs = require('fs');
const {writeFile} = require('fs').promises;

const generateREADME = ({title,description,instructions,usage,guidelines,test,license,licenseURL,github,email}) => 
`# ${title}

[${license}](${licenseURL})

## Table of Contents
- [Description](#description)
- [Instructions](#instructions)
- [Usage](#usage)
- [Contribution](#contribution)
- [Screenshot](#test)
- [License](#license)
- [¿Questions?](#questions)

## Description <br/>

${description}

## Instructions <br/>

${instructions}

## Usage <br/>

${usage}

## Contribution <br/>

${guidelines}

## Test <br/>

![${title}](${test})

## License <br/>

${title} was release under the [${license}](${licenseURL}).

## ¿Questions? <br/>

Github: ${github} <br/>
Email: ${email}`

const prompt = () =>{
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Enter a title',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter a description',
        },
        {
            type: 'input',
            name: 'instructions',
            message: 'Set the intructions',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Set usage information',
        },
        {
            type: 'input',
            name: 'guidelines',
            message: 'Enter the contribution guidelines',
        },
        {
            type: 'input',
            name: 'test',
            message: 'Enter your image URL',
        },
        {
            type: 'input',
            name: 'license',
            message: 'Write on the terminal one of the next license : [MIT License] [Unlicense] [ISC License]',
            choices: ["yes", "no","no se"],
        },
        {
            type: 'input',
            name: 'licenseURL',
            message: 'Enter the license url',
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your github url',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email adress',
        },
    ])
}


const init = () => {
    prompt()
    .then((answers) => writeFile('generatedREADME.md',generateREADME(answers)))
    .then(() => console.log('Readme created!'))
    .catch((e) => console.log(e));
}

init();

