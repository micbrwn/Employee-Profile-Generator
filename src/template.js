;
const index = require('../index');
const fs = require('fs');

let htmlTemplate = [];

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
            <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank">${engineer.getGithub()}</a></li>
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
          <div class="container">
            <div class="row">
              <div class="team-area col-12 d-flex flex-wrap justify-content-center">
                <div class="card employee-card">
                  ${htmlTemplate.join()};
                </div>
              </div>
            </div>
          </div>
        </main>
    </body>
    </html>`
};

const generateHTML = (team) => {
  fs.writeFile('./dist/team.html', employeesTemplate(team), () => {
    console.log(team, "File written successfully!");
  })
}

module.exports = {generateHTML};
