import axios from 'axios'


const REACT_APP_API_URL = "http://localhost:8080/api/"
const img_url = "http://localhost:8080/api/subir/img"

export async function searchUsuarios() {

    let url = REACT_APP_API_URL + "usuarios"

    let response = await fetch(url, {

        "method": "GET",
        "headers": { "Content-Type": "application/json", 'Authorization': localStorage.token }

    })

    return await response.json()

}

export async function searchUsuarioById(id) {

    let url = REACT_APP_API_URL + "usuarios/" + id

    let response = await fetch(url, {

        "method": "GET",
        "headers": {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': localStorage.token
        }

    })

    return await response.json()

}

export async function savehUsuarios(datos) {

    let url = REACT_APP_API_URL + "usuarios"

    const request = await fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
    });

    const respuesta = await request.text()
    return respuesta
}

export async function buscarEmail(email) {

    let url = REACT_APP_API_URL + "usuarios/email/" + email

    const request = await fetch(url, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });

    const respuesta = await request.text()
    return respuesta
}

export async function authenticatedUser(email, password) {

    let url = REACT_APP_API_URL + "login"
    let avisoContrasena = document.getElementById("avisoContrasena")
    let datos = {}
    datos.email = email;
    datos.password = password;

    const request = await fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
    });

    const respuesta = await request.text()

    if (respuesta != 'fail') {
        localStorage.token = respuesta
        localStorage.email = datos.email
        localStorage.id = await buscarEmail(localStorage.getItem('email'))
        avisoContrasena.innerHTML = ""
        return respuesta

    } else {
        let avisoContrasena = document.getElementById("avisoContrasena")
        avisoContrasena.innerHTML = "El usuario o contraseña es incorrecto"
        return null
    }

}

export async function saveImagen  (username,imagen)  {

    const file = new FormData()

    file.append("image", imagen)
    file.append("name", username)

    await axios.post(img_url, file)
        .then(response => {
            console.log(response.data)
        }).catch(error => {
            console.log(error)
        })

}

export async function updateField (datos)  {

    const url = REACT_APP_API_URL + "usuarios/"

    await fetch(url, {
        "method": "PUT",
        "headers": {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': localStorage.token
        },
        body: JSON.stringify(datos)
    })
    
}