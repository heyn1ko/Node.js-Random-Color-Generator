//PREVIOUS CODE
// const bigLine = '#'.repeat(31);
// const smallLine = '#'.repeat(5) + ' '.repeat(21) + '#'.repeat(5);

// console.log(bigLine);
// console.log(bigLine);
// console.log(bigLine);

// console.log(smallLine);
// console.log(smallLine);
// console.log(smallLine);
// console.log(bigLine);
// console.log(bigLine);
// console.log(bigLine);

import { argv } from 'node:process';
import chalk from 'chalk';
import randomColor from 'randomcolor';

const color = randomColor({ hue: argv[2], luminosity: argv[3] });
console.log(
  chalk.hex(color).bold(`###############################
###############################
###############################
#####                     #####
#####      ${color}        #####
#####                     #####
###############################
###############################
###############################`),
);
