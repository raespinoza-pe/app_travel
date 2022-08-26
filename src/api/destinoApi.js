const REACT_APP_API_URL = "http://localhost:8080/api/"
const img_url = "http://localhost:8080/api/subir/img"

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

    const request = await fetch(url, {
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

    const request = await fetch(url, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': localStorage.token
        }
    });

}