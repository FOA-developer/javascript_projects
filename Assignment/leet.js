// anonymous function
var greeting = function (name){
    return `Hi ${name}`
}
console.log(greeting('flourish'))

//IIFE 
// userName = 
(function (name){
    return `your username is ${name}`;
}) ('flourish');
// console.log