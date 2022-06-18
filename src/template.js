// const { template } = require("@babel/core");
// const { moduleExpression } = require("@babel/types");
const index = require('../index');
const fs = require('fs');
// const indexjs = { index };
/**********************************************************
  REMOVE ALL THE COMMENTS BEFORE SUBMITTING YOUR HOMEWORK
***********************************************************/
let htmlTemplate = [];
// let managerTemplate = [];
// let engineerTemplate = [];
// let internTemplate = [];  

const employeesTemplate = (team) => {
  for (i = 0; i < team.length; i++) {
    let role = team[i].getRole();
    switch (role) {

      case "Manager": 
      generateManager(team[i])
      break;

      case "Intern":
      generateIntern(team[i])
      break;

      case "Engineer":
      generateEngineer(team[i])
      break;
    }
  }

  
  function generateManager(manager) {
    let managerCard = `
        <div class="card employee-card" style="width: 18rem;">
    <div class="card-header">
        <h2 class="card-title">${manager.getName()}</h2>
        <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${manager.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${manager.getId()}</li>
            <li class="list-group-item">Email: <a href="${manager.getEmail()}">${manager.getEmail()}</a></li>
            <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
        </ul>
    </div>
</div>
    `
    htmlTemplate.push(managerCard)
  }

  function generateEngineer(engineer) {
    let engineerCard = `
    <div class="card employee-card" style="width: 18rem;">
    <div class="card-header">
        <h2 class="card-title">${engineer.getName()}</h2>
        <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${engineer.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID:${engineer.getId()}</li>
            <li class="list-group-item">Email: <a href="${engineer.getEmail()}">${engineer.getEmail()}</a></li>
            <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank" rel="noopener noreferrer">${engineer.getGithub()}</a></li>
        </ul>
    </div>
</div>
    `
    htmlTemplate.push(engineerCard)
  }

  function generateIntern(intern){
   let internCard = `
    <div class="card employee-card" style="width: 18rem;">
    <div class="card-header">
        <h2 class="card-title">${intern.getName()}</h2>
        <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${intern.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID:${intern.getId()}</li>
            <li class="list-group-item">Email: <a href="${intern.getEmail()}">${intern.getEmail()}</a></li>
            <li class="list-group-item">School: ${intern.getSchool()}</li>
        </ul>
    </div>
</div>
   `
   htmlTemplate.push(internCard)
  }

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="./style.css">
        <title>Employee Profile</title>
        <script src="https://kit.fontawesome.com/de01171047.js" crossorigin="anonymous"></script>
    </head>

    <body>
        <header>
            <div class="jumbotron jumbotron-fluid">
                <div class="container">
                  <h1 class="display-4 text-center">My Team</h1>
                </div>
              </div>    
        </header>
          
        <main>
            ${htmlTemplate.join()};
        </main>
    </body>
    </html>`
};

const generateHTML = (team) => {
  fs.writeFile('./dist/team.html', employeesTemplate(team), () => {
    console.log(team, "File written successfully!");
  })
}

// , function(err, result) {
//   (err) ? console.log('error', err): console.log(`Successfully created employee profile.`);
//   }
// module.exports = employeesTemplate;
// module.exports = dataPassedIn => {return employeesTemplate(dataPassedIn)};
module.exports = {generateHTML};

// Step 1. export function to generate entire html page with template literal
// Step 2. function to create team template
// Step 3. functions to generate manager, engineer, and intern templates

// Step 3a. function to generate manager card template
//  - take in manager as input parameter, a manager object
//  - create manager card template fict
//  -   call get name, get role, get id, get email, and get office number methods to fill in the template
//  - return the template to the caller

// Step 3b. function to generate engineer card template
//  - take in engineer as input parameter, an engineer object
//  - create engineer card template
//  -   call get name, get role, get id, get email, and get github methods to fill in the template
//  - return the template to the caller

// Step 3c. function to generate intern card template
//  - take in intern as input parameter, an intern object
//  - create intern card template
//  -   call get name, get role, get id, get email, and get school methods to fill in the template
//  - return the template to the caller

// Step 2. function to create the team template
// take in team as input parameter from the caller
//  - create an empty array to hold the template literal strings for the entire team members
//  - 1. use array.filter() on team to get the new array with only 'Manager' members via getRole method
//  -   use array.map() on the 'Manager' arrray and in the callback function to call a function to generate manager card template passing each manager as input argument
//  -   convert the resultant manager template array from .map() into string using .join()
//  -   the converted template leterail string is pushed to the empty team template array
//  - 2. use array.filter() on team to get the new array with only engineer members via getRole method
//  -   use array.map() on the engineer arrray and in the callback function to call a function to generate engineer card template passing each engineer as input argument
//  -   convert the resultant engineer template array from .map() into string using .join()
//  -   the converted template leterail string is pushed to the empty team template array
//  - 3. use array.filter() on team to get the new array with only intern members via getRole method
//  -   use array.map() on the intern arrray and in the callback function to call a function to generate intern card template passing each intern as input argument
//  -   convert the resultant intern template array from .map() into string using .join()
//  -   the converted template leterail string is pushed to the empty team template array
//  - 4. convert the empty team template array (now is not empty) into template string, then return it to the caller



// Step 1. export function to generate entire html page with template literal
//  - this function takes in team as input parameter from the caller, which is array of answer objects from user input
//  - in this function, within the template literal, you will call another function to create the team template
//  -   passing team , array of answer objects, as input argument
//  - you will return the template to the caller
//  - export the function