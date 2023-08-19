const inquirer = require('inquirer');
const fs = require('fs/promises')
const {generateMarkdown} = require('./utils/generateMarkdown');
const genREADME = require('./utils/generateREADME')

const questions = () => {
  return inquirer
.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'TITLE:',
    },
    {
      type: 'input',
      name: 'description',
      message: 'DESCRIPTION:',
    },
    {
      type: 'input',
      name: 'instructions',
      message: 'INSTALLATION INSTUCTIONS:',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'USAGE INFORMATION:',
    },
    {
      type: 'input',
      name: 'guidelines',
      message: 'CONTRIBUTION GUIDELINES:',
    },
    {
      type: 'input',
      name: 'test',
      message: 'TEST INSTRUCTIONS:',
    },
    {
      type: 'list',
      name: 'license',
      message: 'LICENSE:',
      choices: ['Apache 2.0 License','Boost Software License 1.0','BSD 3-Clause License','The MIT License','No License']
    },
    {
      type: 'input',
      name: 'github',
      message: 'GITHUB:',
    },
    {
      type: 'input',
      name: 'email',
      message: 'EMAIL:',
    },
])
}

function init() {
  questions()
  .then((a)=>{
    const markdown = generateMarkdown(a.license)
    const badge = markdown[0]
    const link = markdown[1]
    fs.writeFile('generatedREADME.md',genREADME(a.title,a.description,a.instructions,a.usage,a.guidelines,a.test,a.license,link,badge,a.github,a.email))
  })
  .then(()=>console.log('README Successfully generated!'))
  .catch((err)=>console.log(err.message));
}

init();
