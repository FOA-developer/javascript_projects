
const btn = document.querySelector('.btn')
const correctUsername = 'flourish';
const correctPassword = '12345';


const login = (username, password)  => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
    if(username === correctUsername){
      if(password === correctPassword){
         resolve("Login successful")
      }else{
        reject("wrong password")
      }
    }else{
      reject("invalid username...Try Again")
    }
  }, 2000)
  })
}


btn.addEventListener('click', () => {
  const username = document.querySelector('.user').value
  const password = document.querySelector('.special').value
  login(username, password)
   .then(message => {console.log(`${message}...Welcome Back ${username}`)})
   .catch(error => console.log(error))
})

const displayStatus = (verdict,user) => {
  if(verdict === "successful"){
    console.log();
  }else if(verdict === "wrong password"){
    console.log(`Wrong Password...Try Again`)
  }else if(verdict === "invalid username"){
    console.log("Invalid Username")
  }
}


//Async and await
const greet = (name) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Hello, ${name}!`)
    }, 2000)
  })
}

const displayGreeting = async () => {
  try{
    const you = await greet("flourish");
    console.log(you)
  }
  catch(err){
    console.error(err)
  }
}

displayGreeting();



const testPromise = new Promise((resolve,reject) => {
  const result = 5 + 5;
  if(result === 10){
    resolve("Fulfilled")
  }else{
    reject("Rejected")
  }
});

testPromise.then(message => {
  console.log(message)
}).catch(message => {console.log(message)})


//Api practice with a weather api
const apiUrl = "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m&past_days=0&forecast_days=7"

fetch(apiUrl)
  .then(response => {
    if(!response.ok){
      throw new Error(`error ${response.status}`)
    }
    return response.json()
  })
  .then(data => {
    console.log(data.timezone)
  })
  .catch(err => {
    console.error(err)
  })


//Learning how to make http requests myself
const request = new XMLHttpRequest();

//the first argument of the open method is always the name of the kind of request we are making either GET, POST or smth else
//the second argument is the Api endpoint or url

request.addEventListener('readystatechange', () => {
  console.log(request.readyState)
  if(request.readyState === 4){
    console.log(request.responseText)
  }
})

request.open('GET','https://jsonplaceholder.typicode.com/todos');
request.send()