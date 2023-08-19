function renderLicense(license) {
  let badge = '';
  let link = '';
  switch(license){
    case 'Apache 2.0 License':
      badge = `https://img.shields.io/badge/License-Apache_2.0-blue.svg`;
      link = `https://opensource.org/licenses/Apache-2.0`
      break;
    case 'Boost Software License 1.0':
      badge = `https://img.shields.io/badge/License-Boost_1.0-lightblue.svg`;
      link = `https://www.boost.org/LICENSE_1_0.txt`;
      break;  
    case 'BSD 3-Clause License':
      badge = `https://img.shields.io/badge/License-BSD_3--Clause-blue.svg`;
      link = `https://opensource.org/licenses/BSD-3-Clause`;
      break;
    case 'The MIT License':
      badge = `https://img.shields.io/badge/License-MIT-yellow.svg`;
      link = `https://opensource.org/licenses/MIT`;
      break;
  }
  return [badge,link];
}

function generateMarkdown(data) {
  let rendered = renderLicense(data);
  if(rendered[1] !== ''){
    return rendered;
    // return `[![License: ${data}](${rendered[0]})](${rendered[1]})`
  }
  return `No License`;
}

module.exports = {generateMarkdown};
