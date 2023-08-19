module.exports = (title,description,instructions,usage,guidelines,test,license,link,badge,github,email)=>
`
# ${title}

[![License](${badge})](${link})
    
## Table of Contents
- [Description](#description)
- [Instructions](#instructions)
- [Usage](#usage)
- [Contribution](#contribution)
- [Screenshot](#test)
- [License](license)
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

${title} was release under the [${license}](${link})
    
## ¿Questions? <br/>
    
Github: ${github} <br/>
Email: ${email}
`;