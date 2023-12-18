import { useState, useEffect } from 'react'
import Filter from './Components/Filter'
import PersonForm from './Components/PersonForm'
import Persons from './Components/Persons'
import Person from './Components/Person'
import phonebookService from './services/persons'


const App = () => {
  const [persons, setPersons] = useState([]) 

  useEffect(()=>{
    phonebookService.getAll()
    .then(initialPersons => setPersons(initialPersons))
  },[])

  // delete name and number
  const deleteUser = (id) => {
    phonebookService.deleteId(id)
    .then(()=>setPersons(persons.filter(person => person.id !== id )))
  }

  // name search
  const [findNameValue, setFindNameValue] = useState('')

  const findName = (event) => {
    setFindNameValue(event.target.value)  
  } 
  const filterName= persons.filter(person=>person.name
    .toLowerCase().includes(findNameValue.toLowerCase()))
  
  const showNames = findNameValue 
  ? filterName.map(person=> 
    <Person id={person.id} name={person.name} number={person.number}
     key={person.id}  deleteUser={deleteUser}/>
  )
  : persons.map(person=>
    <Person id={person.id} name={person.name} number={person.number}
     key={person.id}  deleteUser={deleteUser}/>
  )

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
              number: newNumber
            }                                     
    phonebookService.create(nameObject)
    .then(returnedPersons => setPersons(persons.concat(returnedPersons)))
    setNewName(''),setNewNumber('')
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
        <Persons showNames={showNames}/>
    </div>
  )
}
export default App