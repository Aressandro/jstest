const app = document.getElementById('app');
const test = document.createElement("p");
const usersContainer = document.createElement("div");
usersContainer.id= 'userscont'
app.appendChild(usersContainer)
app.appendChild(test);
let usersArray=[]
console.log(app)
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json() 
      ) .then(users => {
          usersArray=users
          console.log(typeof usersArray)
        const usersList = usersArray.map(user => (
            { 
                name: user.name,
                phone: user.phone,
                email: user.email,
            }
            ))
            usersList.forEach(element => {
                var el = `
                <div class="row">
                <p>name: ${element.name}</p>
                <p>phone: ${element.phone}</p>
                <p>email: ${element.email}</p>
                </div class="row">
                `
                usersContainer.innerHTML += el
            });

      })
