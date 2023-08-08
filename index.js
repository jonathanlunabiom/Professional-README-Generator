const inquirer = require('inquirer');
const fs = require('fs');

const READMEgenerate = ({title,description,instructions,usage,guidelines,test,license,github,email}) => 
`# ${title}

## Table of Contents

- [Description](#Description)
- [Instructions](#Instructions)
- [Usage](#Usage)
- [Contribution](#Contribution)
- [Test](#Test)
- [License](#License)
- [Questions](#Questions)

## Description <br/>

${description}

## Instructions <br/>

${instructions}

## Usage <br/>

${usage}

## Contribution <br/>

${guidelines}

## Test <br/>

${test}

## License <br/>

${license}

## Questions <br/>

Github: ${github} <br/>
Email: ${email}`

inquirer.prompt([
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
        message: 'Set the test instructions',
    },
    {
        type: 'input',
        name: 'license',
        message: 'Write on the terminal one of the next license : [MIT License] [Unlicense] [ISC License]',
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
.then((answers) => {
    const readmecontent = READMEgenerate(answers);

    fs.writeFile('README.md', readmecontent, (e) => 
    e ? console.log(e) : console.log("readme created!")
    )
})