import axios from 'axios'

const googleAPI = 'https://script.google.com/macros/s/AKfycbx88u5X_7OG0qz46SUO9lzJ5vM_d6zy45NVD59zAlQAs1jeV2mlm5zyRfRBvj2oUnWo/exec'

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

export async function getInfo() {
    const api = `${googleAPI}?type=info`
    const data = await axios.get(api).then((response) => {
        return response.data
    })

    return data
}