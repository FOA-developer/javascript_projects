
const btn = document.querySelector('.btn')
const correctUsername = 'flourish';
const correctPassword = '12345';


const login = (username, password, callback) =>{
  let verdict = "";
    setTimeout(() => {
    if(username === correctUsername){
      if(password === correctPassword){
         verdict = "successful"
      }else{
        verdict = "wrong password"
      }
    }else{
      verdict = "invalid username"
    }
    callback(verdict,username);
  }, 2000)
}


const displayStatus = (verdict,user) => {
  if(verdict === "successful"){
    console.log(`Login Succseeful...Welcome Back ${user}`);
  }else if(verdict === "wrong password"){
    console.log(`Wrong Password...Try Again`)
  }else if(verdict === "invalid username"){
    console.log("Invalid Username...Try Again")
  }
}

btn.addEventListener('click', () => {
  const username = document.querySelector('.user').value
  const password = document.querySelector('.special').value
  login(username, password, displayStatus)
})
