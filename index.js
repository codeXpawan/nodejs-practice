// console.log('Hello!')
// const { random_number_generator, celcius_to_kelvin} = require('./random');
// console.log(`Random Number: ${random_number_generator()}`);
// console.log(`celcius to kelvin : ${celcius_to_kelvin(0)}`);


import getPost, {getPostLength} from "./post_controller.js";

console.log(getPost());
console.log(`Posts length: ${getPostLength()}`);