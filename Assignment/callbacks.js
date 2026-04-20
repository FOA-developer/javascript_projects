
const btn = document.querySelector('.btn')
const correctUsername = 'flourish';
const correctPassword = '12345';


const login = (username, password) =>{
  return new Promise((resolve, reject) => {
    let verdict = "";
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
   .then(message => {console.log(`${message}...Welcome Back ${user}`)})
   .catch(message => console.log(message))
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


