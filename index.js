//const chalk = require("chalk"); //PREVIOUS VERSION
import chalk from 'chalk';  //NEW VERSION
//console.log(chalk.blue.bold("hello"))

//const { default: chalk } = require('chalk')
//const validator = require('validator')
import validator from 'validator';
const res = validator.isEmail('himanshu@gmailom')
console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res));