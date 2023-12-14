import { useState, useEffect } from 'react'
import Filter from './Components/Filter'
import PersonForm from './Components/PersonForm'
import Persons from './Components/Persons'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([]) 

  const hook = () => {
    axios
    .get("http://localhost:3002/persons")
    .then(response => setPersons(response.data))
  }
  useEffect(hook, [])

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
      if(person.name === newName){  
          alert(`${newName} is already added to phonebook`) 
          return setNewName(''),setNewNumber(''),setPersons(persons)    
      }else if(person.number === newNumber){
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
        <Filter find={findName} value={findNameValue}/>
      <h3>Add a new</h3>
        <PersonForm addNewName={addNewName} writeName={writeName} 
        newName={newName} writeNumber={writeNumber} newNumber={newNumber}/>
      <h3>Numbers</h3>
      {/* <div>{showNames}</div> */}
      <Persons showNames={showNames}/>
    </div>
  )
}
export default App