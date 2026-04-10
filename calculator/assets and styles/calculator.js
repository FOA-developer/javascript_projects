// display input 
  let screen = document.querySelector('.input');

  let button = document.querySelectorAll('.display');
    button.forEach((one) => {
      one.addEventListener('click', () => {
        countLength();
        screen.value += one.innerText;
        return screen.value;
      })
    })

// counts length in the screen
  const countLength = () => {
    let count = screen.value.length;
    if(count === 7){
      clearElement();
    }
  }

// invokes the count length anytime a buton is clicked
  document.querySelector('.input').addEventListener('keydown', () => {
  countLength()
  })

// clears a value from the screen 
  function clearElement(){
    let newValue = screen.value.slice(0, -1);
    screen.value = newValue;
  }
  document.querySelector('.clear').addEventListener('click', () => clearElement())

//declaring operators
const operators = ['+', '-', 'x', '/'];


const key = document.querySelectorAll('.button');
let firstValue = '';
let secondValue = '';

// tracking each button clicked
  key.forEach((btn) => {
    btn.addEventListener('click', (e) =>{
      let tab = e.target.textContent;
      PlacingValue(tab);
      return tab;})
  })


  const PlacingValue = (tab) => {
    const hasOperator = operators.filter((operator) => screen.value.includes(operator));
      if(hasOperator.length === 0){
        firstValue += tab;
      }else{
        const parts = screen.value.split(hasOperator[0]);
        firstValue = Number(parts[0]);
        secondValue = Number(parts[1]);
        console.log(secondValue);
      }
  }

// calculating the values
  const calculate = () => {
    const hasOperator = operators.filter((operator) => screen.value.includes(operator));
    if(hasOperator[0] === '+'){
      screen.value = firstValue + secondValue;
    }else if (hasOperator[0] === '-'){
      screen.value = firstValue - secondValue;
    }else if (hasOperator[0] === 'x'){
      screen.value = firstValue * secondValue;
    }else if (hasOperator[0] === '/'){
      screen.value = firstValue / secondValue;
    }

  }
// invoking the calculate function when the equal button is clicked
  document.querySelector('.equal').addEventListener('click', () => calculate())