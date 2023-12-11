import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
      id:1 
    }
  ]) 
  const [newName, setNewName] = useState('')

  const writeName = (event) => {
    setNewName(event.target.value)
  }

  const addNewName = (event) => {
    event.preventDefault()
    if(newName.length > 0){
      const nameObject = {
        name: newName,
        id: persons.length + 1
      }
      setPersons(persons.concat(nameObject))
      setNewName('')
    }  
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNewName}>
        <div>
          name: <input onChange={writeName} value={newName}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>{persons.map(person=><p key={person.id}>{person.name}</p>)}</div>
    </div>
  )
}

export default App