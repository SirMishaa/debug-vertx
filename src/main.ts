import auth0 from 'auth0-js'
import './style.css'

const app = document.querySelector<HTMLDivElement>('#app')!
console.log(app.children.length)

const ID_TOKEN_KEY = 'id_token'

export function login () {

    const auth = new auth0.WebAuth({
        clientID: ID_TOKEN_KEY,
        domain: "test.fr"
    })

    auth.authorize({
        responseType: 'token id_token',
        redirectUri: "process.env.VUE_APP_AUTH0_CALLBACK_URL"
    })
}

document.addEventListener('click', login)
