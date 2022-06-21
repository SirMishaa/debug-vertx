import auth0 from 'auth0-js'
import './style.css'

const app = document.querySelector<HTMLDivElement>('#app')!
console.log(app.children.length)

export function login () {

    const auth = new auth0.WebAuth({
        clientID: 'test',
        domain: 'test.fr'
    })

    auth.authorize({
        responseType: 'token',
        redirectUri: 'callback'
    })
}

document.addEventListener('click', login)
