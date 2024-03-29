const REACT_APP_API_URL = "http://localhost:8080/api/"

export async function searchDestinosbyUser(id) {

    let url = REACT_APP_API_URL + "usuarios/destinos/" + id

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


export async function saveDestinos(datos) {

    let url = REACT_APP_API_URL + "destinos"

    await fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
    });

}

export async function removeDestinos(id) {

    let url = REACT_APP_API_URL + "destinos/"+id

    await fetch(url, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': localStorage.token
        }
    });

}

export async function searchDestinosbyId(id) {

    let url = REACT_APP_API_URL + "destinos/" + id  

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

export async function updateDestinosbyId(datos) {

    let url = REACT_APP_API_URL + "destinos"

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