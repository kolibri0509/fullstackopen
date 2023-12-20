import { useState, useEffect } from 'react'
import Filter from './Components/Filter'
import PersonForm from './Components/PersonForm'
import Persons from './Components/Persons'
import Person from './Components/Person'
import phonebookService from './services/persons'
import Notification from './Components/Notification'


const App = () => {
  const [persons, setPersons] = useState([]) 
  const [message, setMessage] = useState(null)

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
  
  const replaceNumber = (id) => {
    const contact = persons.find(p => p.id === id)
    if(window.confirm(`${contact.name} is already added to phonebook,
    replace the old number with a new one?`)){
      const changeContact = {...contact, number:newNumber}
      phonebookService.update(id, changeContact)
      .then(returnedPersons => 
        setPersons(persons.map(p => p.id !== id? p : returnedPersons)))
        setNewName(''),setNewNumber('')
    }  
  }

  const replaceName = (id) => {
    const contact = persons.find(p => p.id === id)
    if(window.confirm(`${contact.number} is already added to phonebook,
    replace the old name with a new one?`)){
      const changeContact = {...contact, name:newName}
      phonebookService.update(id, changeContact)
      .then(returnedPersons => 
        setPersons(persons.map(p => p.id !== id? p : returnedPersons)))
        setNewName(''),setNewNumber('')
    }  
  }

  const addNewName = (event) => {  
    event.preventDefault() 
    if(newName.length>0 && newNumber.length>0){
      if(persons.find(person => person.name === newName)&&
      persons.find(person => person.number === newNumber)){
        alert('This contact is already in the phone book.')
        setNewName(''),setNewNumber('')
      }
      else if(persons.find(person => person.name === newName)){
        const replace = persons.filter(person => person.name === newName)
        replaceNumber(replace[0].id)
        setMessage('Number successfully changed')
        setTimeout(()=>{
          setMessage(null)
        },5000)
      }else if(persons.find(person => person.number === newNumber)){
        const replace = persons.filter(person => person.number === newNumber)
        replaceName(replace[0].id)
        setMessage('Name successfully changed')
        setTimeout(()=>{
          setMessage(null)
        },5000)
      }else{
        const nameObject = {
          name: newName,
          number: newNumber
        } 
        phonebookService.create(nameObject)
        .then(returnedPersons => setPersons(persons.concat(returnedPersons))),
        setMessage(`Added ${newName}`)
        setTimeout(()=>{
          setMessage(null)
        },5000)
        setNewName(''),setNewNumber('')
      }      
    }  
  }    
  return (
    <div>
      <h2>Phonebook</h2>
        <Notification message={message}/>
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