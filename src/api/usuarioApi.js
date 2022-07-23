const REACT_APP_API_URL = "http://localhost:8080/api/";

export async function searchUsuarios() {

    let url = REACT_APP_API_URL + "usuarios"

    let response = await fetch(url, {

        "method": "GET",
        "headers": { "Content-Type": "application/json" ,'Authorization' : localStorage.token }

    });

    return await response.json();

}


export async function authenticatedUser(email, password) {

    let url = REACT_APP_API_URL + "login"
    let avisoContrasena = document.getElementById("avisoContrasena")
    let datos = {}
    datos.email = email;
    datos.password = password;

    const request = await fetch (url,{
        method: 'POST',
        headers: {
            'Accept' : 'application/json',
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify (datos)
    });


    const respuesta = await request.text()

    if(respuesta != 'fail'){
        localStorage.token = respuesta
        localStorage.email = datos.email
        avisoContrasena.innerHTML = ""
        return respuesta
        
    } else {
        let avisoContrasena = document.getElementById("avisoContrasena");
        avisoContrasena.innerHTML = "El usuario o contraseña es incorrecto"
        return null
    }

}