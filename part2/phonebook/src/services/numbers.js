import axios from "axios";
const baseURL = 'http://localhost:3001/persons'

const getAll = () => {
    const request = axios.get(baseURL)
    return request.then( response => response.data)
}

const create = (newNumber) => {
    const request = axios.post(baseURL, newNumber)
    return request.then( response => response.data)
}

const update = newNumber => ({newNumber, id}) => {
    const request = axios.put(baseURL + "/" + id, newNumber)
}

export default {getAll, create, update}