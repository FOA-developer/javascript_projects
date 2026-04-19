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


/*
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
*/

const operators = ['+', '-', 'x', '/'];
const calculate = () => {
  let tokens = [];
  let num = '';
  for(let i = 0; i < screen.value.length; i++){
    let isOperator = operators.includes(screen.value[i]);
    if(isOperator == false){
      num += screen.value[i];
      console.log(num)
    }else{
      tokens.push(Number(num));
      tokens.push(screen.value[i]);
      num = '';
    };
  }
  if (tokens[tokens.length -1]){
    if(num !== ''){
      tokens.push(Number(num));
    }
   }
  
  console.log(tokens);

  const cal = () => {
      let bodmas = tokens.findIndex((op) => op === "/")
      if(bodmas !== -1){
        valueCal(bodmas, tokens);
        tokens[bodmas - 2] = values[0] / values[1];
        console.log(bodmas)
        console.log(values)
        console.log(tokens[bodmas-2])
      }else{
        let odmas = tokens.findIndex((op) => op === "x");
        if(odmas !== -1){
          valueCal(odmas, tokens);
          tokens[odmas - 2] = values[0] * values[1];
        }else{
            let bodmas = tokens.findIndex((op) => op === "+");
            if(bodmas !== -1){
            valueCal(bodmas, tokens);
            tokens[bodmas - 2] = values[0] + values[1];
            }else{
              let bodmas = tokens.findIndex((op) => op === "-")
              if(bodmas !== -1){
                valueCal(bodmas, tokens);
                tokens[bodmas - 2] = values[0] - values[1];
              }
            }
        }

    }
    console.log(tokens);
  }
  
  cal();

}

const valueCal = (index, arr) => {
  values = arr.slice(index - 1, index + 2);

  return values;
}

document.querySelector('.equal').addEventListener('click', () => calculate());

const toDecimal = () => {
  screen.value = parseFloat(screen.value);
}
document.querySelector('.dec').addEventListener('click', () => toDecimal())