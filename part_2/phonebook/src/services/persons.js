import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/persons'

const getAll = () => {
    const nonExisting = {
        id: 10000,
        name: 'This NAME is not saved to server',
        number: 890656342,
      }
    return axios.get(baseUrl)
    .then(response => response.data.concat(nonExisting))
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