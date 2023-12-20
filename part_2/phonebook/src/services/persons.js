import axios from 'axios'
const baseUrl = 'http://localhost:3002/persons'

const getAll = () => {
    return axios.get(baseUrl)
    .then(response => response.data)
}

const create = (nameObject) => {
    return axios.post(baseUrl, nameObject)
    .then(response => response.data)
}

const deleteId = (id) => {
    return axios.delete(`${baseUrl}/${id}`)
    .then(response => response.data)
}

const update = (id, replaceObject) => {
    return axios.put(`${baseUrl}/${id}`,replaceObject)
    .then(response => response.data)
}

export default {getAll, create, deleteId, update}