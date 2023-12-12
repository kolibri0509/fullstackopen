import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',number : '040-1234567', id:1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 

  // name search
  const [findNameValue, setFindNameValue] = useState('')

  const findName = (event) => {
    setFindNameValue(event.target.value)  
  } 
  const filterName= persons.filter(person=>person.name.toLowerCase().includes(findNameValue.toLowerCase()))
  
  const showNames = findNameValue 
  ? filterName.map(person=><p key={person.id}>{person.name} {person.number}</p>)
  : persons.map(person=><p key={person.id}>{person.name} {person.number}</p>)

  // adding name and number
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  
  const writeName = (event) => {
    setNewName(event.target.value)
  }

  const writeNumber = (event) => {
    setNewNumber(event.target.value)
  }

  const addNewName = (event) => {
    event.preventDefault()
    if(newName.length>0 && newNumber.length>0){  
        const nameObject = {
              name: newName,
              number: newNumber,
              id: persons.length + 1
            }                                     
    persons.map(function(person){
      if(newName === person.name){  
          alert(`${newName} is already added to phonebook`) 
          return setNewName(''),setNewNumber(''),setPersons(persons)    
      }else if(newNumber === person.number){
          alert(`${newNumber} is already added to phonebook`)
          return setNewNumber(''),setNewName(''),setPersons(persons)
      }
      else{
        return setNewName(''),setNewNumber(''),
        setPersons(persons.concat(nameObject))
        }
      })             
    } 
  }        
  
  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with <input onChange={findName} value={findNameValue}/>
      </div>
      <h2>Add a new</h2>
      <form onSubmit={addNewName}>
        <div>
          name: <input onChange={writeName} value={newName}/> <br/> <br/>
          number: <input onChange={writeNumber} value={newNumber}/>
        </div> <br/>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>{showNames}</div>
    </div>
  )
}

export default App