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

