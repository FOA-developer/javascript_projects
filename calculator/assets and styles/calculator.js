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
  function countLength(){
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
