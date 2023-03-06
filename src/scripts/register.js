import { registerRequest } from "./request.js"

function authentication() {
    const token = localStorage.getItem('@petinfo:token')
  
    if(token) {
      window.location.replace('./dashboard.html')
    }
}

function handleRegister(){
    const inputs = document.querySelectorAll('.registerInput')
    const button = document.querySelector('.registerUser')
    const registerBody = {}
    let count = 0
  
    button.addEventListener('click', async (event) => {
      event.preventDefault()
  
      inputs.forEach(({name, value}) => {
        if(value === '') {
          count++
        }
  
        registerBody[name] = value
      })
  
      if(count !== 0) {
      return alert('por favor preencha todos os campos necessários para realizar o cadastro')
      } else {
        const newUser = await registerRequest(registerBody)
  
        setTimeout(() => {
          window.location.replace('/')
        }, 2000);
      }
    })
}

function redirectHome(){
    const buttons = document.querySelectorAll(".loginPage")
    buttons.forEach(button => {
        button.addEventListener("click", (event) => {
            event.preventDefault();
            window.location.replace("/")
        })
    });
}

redirectHome();
handleRegister();
authentication();