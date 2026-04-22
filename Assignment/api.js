
const getUser = async () => {
  try{
    const response = await fetch("https://randomuser.me/api/")
    if(!response.ok){
     throw new Error('error' + response.status)
    }
  
  const data = await response.json();
  const user = data.results[0];
    let userGrid = `
      <div class= "user-block">
      <img src = "${user.picture.medium}" class="user-img">
      <h3>${user.name.title + " "+ user.name.first +" "+ user.name.last} </h3>
      <p>${user.email}</p>
      </div>
      `;

  document.querySelector('.user-grid').innerHTML += userGrid;
  }catch (err){
    console.error(err);
  }
  
}

const btn = document.querySelectorAll('.btn')
btn.forEach( btn => btn.addEventListener('click', () => {
  getUser();
  console.log('user')
})
)
