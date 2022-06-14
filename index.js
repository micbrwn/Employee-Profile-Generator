const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const {renderHTML} = require('./src/template');
// Imports page template function and assign the function to a variable
// Create variables for the output folder and the html file name

const team = [];
const employeeID = [];

const questions = {
    Manager: [
        {
            type: "input",
            message: "What is the name of the manager?",
            name: "name"
        },
        {
            type: "input",
            message: "What is the manager's Id?",
            name: "id"
        },
        {
            type: "input",
            message: "What is the manager's email?",
            name: "email"
        },
        {
            type: "input",
            message: "What is the manager's office number?",
            name: "officeNumber"
        },
        {
            type: "list",
            message: "Do you want to add another employee?",
            choices: ["yes", "no"],
            name: "add"
        }
    ],

    Engineer: [
        {
            type: "input",
            message: "What is the name of the engineer?",
            name: "name"
        },
        {
            type: "input",
            message: "What is the engineer's Id?",
            name: "id"
        },
        {
            type: "input",
            message: "What is the engineer's email?",
            name: "email"
        },
        {
            type: "input",
            message: "What is the engineer's GitHub username?",
            name: "github"
        },
        {
            type: "list",
            message: "Do you want to add another employee?",
            choices: ["yes", "no"],
            name: "add"
        }
    ],

    Intern: [
        {
            type: "input",
            message: "What is the name of the intern?",
            name: "name"
        },
        {
            type: "input",
            message: "What is the Intern's Id?",
            name: "id"
        },
        {
            type: "input",
            message: "What is the Intern's email?",
            name: "email"
        },
        {
            type: "input",
            message: "What is the school of the Intern?",
            name: "school"
        },
        {
            type: "list",
            message: "Do you want to add another employee?",
            choices: ["yes", "no"],
            name: "add"
        }
    ]
};