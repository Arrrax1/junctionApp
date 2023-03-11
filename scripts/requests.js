const URL = "https://bb3a-105-109-192-130.eu.ngrok.io/api"

const getTokenHeader = async () => {
    try {
        const token = localStorage.getItem("token")

        return {"Authorization": token }
    } catch (err) {
        console.log(err);
    }
}

async function tokenPostRequest(endPoint, body) {
    try {
        const header = await getTokenHeader()
        return postRequest(endPoint, body, header)

    } catch (err) {

    }
}

async function tokenGetRequest(endPoint) {
    try {
        const header = await getTokenHeader()
        console.log(header);
        return getRequest(endPoint, header)

    } catch (err) {

    }
}

async function getRequest(endPoint, headers = {}) {
    try {
        const res = await fetch(URL + endPoint, {
            method: "GET",
            headers: {
                ...headers,
                "accept": "application/json",
            }
        })
        return res.json()
    } catch (err) {

    }
}
async function postRequest(endPoint, body, headers = {}) {
    try {
        const res = await fetch(URL + endPoint, {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
                ...headers,
                "content-type": "application/json",
                "accept": "application/json",
            }
        })
        return res.json()
    } catch (err) {

    }
}