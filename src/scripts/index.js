import { loginRequest } from "./request.js"

function authentication() {
    const token = localStorage.getItem('@petinfo:token')
  
    if(token) {
      window.location.replace('./src/pages/dashboard.html')
    }
}

function handleLogin(){
    const inputs = document.querySelectorAll(".loginInput")
    const button = document.querySelector(".loginButton")
    const loginBody = {}
    let count = 0

    button.addEventListener("click", async (event) => {
        event.preventDefault()

        inputs.forEach(({name, value}) => {
            if(value === ""){
                count++
            }

            loginBody[name] = value
        })
        if(count != 0){
            return alert("Por favor preencha os campos e tente novamente")
        } else {
            const token = await loginRequest(loginBody)
    
            return token
        }
    })
}

function goToRegister(){
    const register = document.querySelector(".registerButton")
    register.addEventListener("click", (event) =>{
        event.preventDefault();
        window.location.replace("./src/pages/register.html")
    })
}

goToRegister();
handleLogin();
authentication();