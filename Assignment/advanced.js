setTimeout(function(){
  console.log('flourish')
}, 2000);


let intervalId = 0;
let interval = setInterval(function(){
  console.log(2 + 3);
  intervalId += 1;
  if (intervalId === 2){
    clearInterval(interval);
  }
  return intervalId;
}, 3000 );
  
 /* add = function(){
    console.log(5)
    intervalId += 1;
    return intervalId;
  }
function runTwice(add){
  let intervalId = 0;
  let interval = setInterval functiion(add(){
    intervalId += 1;
  },3000);
  if (intervalId === 2){ 
    clearInterval(interval)
  }
}*/

btn = document.querySelector('.button')
function timer(){
  if (btn.innerText === 'Start'){
    btn.innerText = 'LOADING....'
    setTimeout(function(){btn.innerHTML = 'Finished'}, 3000)
  }else{
    console.log("error")
    setTimeout(function(){btn.innerHTML = 'Start'}, 3000)
  }
}

let title = document.querySelector('title')
let message = 2;

document.querySelector('.add').addEventListener('click', () => {
  addMessage();
})
function addMessage(){
  message += 1;
}
function removeMessage(){
  message -= 1;
}
setInterval(function(){
  if (message === 0){
    title.innerText = 'App';
  }else{
    title.innerText = `(${message})New Messages`
  }
}, 1000);
setInterval(()=> {
  title.innerText = 'App'
}, 2000);


const greeting = name => `hello ${name}`;
const button = document.querySelector('.add')
button.addEventListener('click')