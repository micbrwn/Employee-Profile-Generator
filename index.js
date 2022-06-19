const Employee = require('./lib/Employee')
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const { generateHTML } = require('./src/template');

let team = [];


const minions = () => {
    return inquirer.prompt([
        {
            type: 'list',
            message: 'what is the employees role?',
            choices: ['Manager', 'Engineer', 'Intern'],
            name: 'role'
        },
        {
            type: "input",
            message: "What is the name of the empoyee?",
            name: "name"
        },
        {
            type: "input",
            message: "What is the employee's Id?",
            name: "id"
        },
        {
            type: "input",
            message: "What is the employee's email?",
            name: "email"
        },
        {
            type: "input",
            message: "What is the manager's office number?",
            name: "officeNumber",
            when: (input) => input.role === 'Manager'
        },
        {
            type: "input",
            message: "What is the engineer's GitHub username?",
            name: "github",
            when: (input) => input.role === 'Engineer'
        },
        {
            type: "input",
            message: "What is the school of the Intern?",
            name: "school",
            when: (input) => input.role === 'Intern'
        },
        {
            type: "list",
            message: "Do you want to add another employee?",
            choices: ["yes", "no"],
            name: "add"
        }
    ])
        .then(response => {
            if (response.role === 'Manager') {
                const { name, id, email, officeNumber } = response;
                const manager = new Manager(name, id, email, officeNumber);
                team.push(manager);
            }

            else if (response.role === 'Engineer') {
                const { name, id, email, github } = response;
                const engineer = new Engineer(name, id, email, github);
                team.push(engineer);
            }
            else if (response.role === 'Intern') {
                const { name, id, email, school } = response;
                const intern = new Intern(name, id, email, school);
                team.push(intern);
            }

            (response.add === 'yes') ? minions() : generateHTML(team);

        })
}

minions();

