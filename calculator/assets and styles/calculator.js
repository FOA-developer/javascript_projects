let screen = document.querySelector('.input');

function displayButton(name){
  let display = document.querySelector(`.${name}`);
  countLength();
  screen.value += display.innerText;
  return screen.value;
}

function countLength(){
  let count = screen.value.length;
  if(count === 7){
    clearElement();
  }
}
document.querySelector('.input').addEventListener('keydown', () => {
 countLength()
})

function clearElement(){
  let newValue = screen.value.slice(0, -1);
  screen.value = newValue;
}

document.querySelector('.clear').addEventListener('click', () => {clearElement();})

/*function calculate(){
  let exp = Number(screen.value);
  let result = eval(exp)
  console.log(result)
  console.log(typeof(exp))
  return result;
}*/

function covertToDecimal(){

}