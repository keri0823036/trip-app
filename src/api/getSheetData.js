import axios from 'axios'

const googleAPI = 'https://script.google.com/macros/s/AKfycbzKZtQbB-0vLnhVCkcQGOxaLac9ctuX05CHVY2FxVRi9_NaUAuy37yrw4ao5oKupw/exec'

export async function getSchedule() {
    const api = `${googleAPI}?type=schedule`
    const data = await axios.get(api).then((response) => {
        return response.data
    })
    
    return data
}

export async function getSpots() {
    const api = `${googleAPI}?type=spots`
    const data = await axios.get(api).then((response) => {
        return response.data
    })

    return data
}