import axios from "axios";
const baseURL = 'http://localhost:3001/api/persons'

const getAll = () => {
    const request = axios.get(baseURL)
    return request.then( response => response.data)
}

const create = (newNumber) => {
    const request = axios.post(baseURL, newNumber)
    return request.then( response => response.data)
}

const update = (newData, id) => {
    const request = axios.put(baseURL + "/" + id, newData)
    return request.then( response => response.data)
}

const remove = (id) => {
    const request = axios.delete(baseURL + "/" + id)
    return request.then( response => response.data)
}

export default {getAll, create, update, remove}