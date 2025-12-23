// Arrays

const toDoList = JSON.parse(localStorage.getItem('toDoList')) ||  [{
  name: '',
  date: ''
}];
const input = document.querySelector('.input-list');
const list = document.querySelector('.list');
const dateInput = document.querySelector('.date-input');

function displayList(){
  list.innerHTML = " "
  toDoList.forEach((obj, index) => {
      obj = " ";  
      let dateobj = toDoList[index].date;
      obj  += `<div><li>${toDoList[index].name} ${dateobj}<button class="delete-btn">Delete</button></li>`;
      obj += "<div>";
      list.innerHTML += obj;
      input.value = "";
      return obj;
    }
  )

  
  const del = document.querySelectorAll('.delete-btn')
  del.forEach((button, index) => {
    button.addEventListener('click', () => {
      toDoList.splice(index, 1);
      displayList();
  })
  })
}


document.querySelector('.add-btn').addEventListener('click', () => {
  ad();
  const del = document.querySelectorAll('.delete-btn');
  delete del[0];
  console.log(del)
})


function ad() {
  if (input.value === "") {
    list.innerHTML = "<p>Please enter a task</p>";
  } else {
    toDoList.push({
      name: input.value,
      date: dateInput.value
    })
    displayList()
    // return toDoList;
  }

 localStorage.setItem('toDoList', JSON.stringify(toDoList));
}






