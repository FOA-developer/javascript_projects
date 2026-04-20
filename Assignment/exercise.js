/*let hour = 14;
let username = 'flourish'
if ( hour >= 6 && hour <= 12){
    console.log(`Good morning ${username}`)
}else if (hour >=13 && hour <= 17){
    console.log(`Good afternoon ${username}`)
}else{
    console.log(`Good night ${username}`)
}

let age =  66;
const isHoliday = false;
if ( !isHoliday && (age <= 6 || age >=65)){
    console.log("YOU GET A DISCOUNT")
}else{
    console.log("No discount")
}
// console.log(!isHoliday)

const randomNumber = Math.random();
randomNumber <= 0.5 ? console.log('Heads') : console.log('Tails');

// an object groups multiple values togrether
const car = {
      name : 'Bmw',
      version : '2024'
    }
    console.log(car.name);
    car.version = 2023;
    console.log(car)

const product = {
    name : 'shirt',
    ['delivery-time ']: '2 hours',
    rating : {
        stars : 4.5,
        count : 39
    },
    fun : function addOperator(){
        console.log('you have a function')
    }
}
console.log(product.name);
console.log(product['name']);
console.log(product['delivery-time']);
console.log(product.rating.count);
jsonObject = JSON.stringify(product);
console.log(jsonObject);
js = JSON.parse(jsonObject);
console.log(js);

// localStorage.setItem('message','hello')
let object = product;
let phone = object;
object === phone ? console.log(true) : console.log(false);
const flourish = {
    message : ' fegor'
}

// let message = flourish.message
// shorter way of writing
const {message} = flourish
console.log(message)


const newOne = {
    message,
    method(){
        console.log('method')
    }
}
const product = {
    name : 'basketball',
    price :  2095,
    ['delivery-time'] : '3- days'
}
const product2 = {
    name : 'soccer',
    price : '$' + 3000
}
product.price = '$' + 2595;
product2.name = 'basketball'

function comparePrice(product, product2){
    if(product.price > product2.price){
        console.log(product2.name,product2.price)
    }else{
        console.log(product.name,product.price)
    }
}
comparePrice(product,product2);

function compareProduct(product1, product2){
    product1.price > product2.price ? console.log(product2.name) : console.log(product1.name)
}
compareProduct(product, product2)
function isSameProduct(product1, product2){
    console.log(product1.name == product2.name);
    console.log(product1.price == product2.price); 
}
isSameProduct(product, product2);
 // function compar


let practice = 'i love you';
console.log(practice)
console.log(practice.slice(2, 8))
practice = 12;
console.log(practice.toString(2))
document.title  = "Exercise"
console.log(document.querySelector('button')
  .innerHTML = 'give me ')
function  subscribeUser(){
    const text = document.querySelector('.subscribe-button')
    console.log(text)
    if (text.innerText === 'Subscribe'){
        text.innerText = 'Subscribed'
        console.log(text)
    }else {
        document.querySelector('.subscribe-button').innerHTML = 'Subscribe'
    }
}
let f = function(name){
    console.log(` hi ${name}`)
};
console.log(f('flourish'))
window.document = ''
let buttonElement = document.querySelector('.cost-holder')
const calculateTotal = function(){
    let totalCost = Math.round(Number(buttonElement.value))
        if (totalCost >= 40){
            document.querySelector('.order-statement').innerHTML = `Your Total Cost Is $${totalCost}`;
        }else if (totalCost < 40){
            totalCost +=10;
            document.querySelector('.order-statement').innerHTML = `Your Total Cost Is $${totalCost}`;
        }
}
const checkKey  = function(event){
    if(event.key === 'Enter'){
        calculateTotal();
    }else{
        console.log('typing');
    }
}


 console.log(myArray);

 
//objecs consurctors
class person {
  constructor(first, last, age) {
    this.firstName = first;
    this.lastnAME = last;
    this.age = age;
  }
}
class animal {
  constructor(type, color, age) {
    this.type = type;
    this.color = color;
    this.age = age;
  }
}
const dog = new animal("Dog", "Brown", 4);
console.log(dog);

const flourish = new person("Fegor", 'Agbanoma', 17);
console.log(flourish);

const numbers = [1,2,3,4,5];
  let total = 0;
  for(let i = 0; i < numbers.length; i++){
    const num = numbers[i];
    total += num;
    console.log(total)
  }

// loops
let i = 1;
while( i <= 10){
  console.log(i);
  i++;
}*/
