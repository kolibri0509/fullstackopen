import { useState, useEffect } from "react";
import Note from './Components/Note'
import noteService from './services/notes'
import Notification from './Components/Notification'
import Footer from './Components/Footer'
import loginService from './services/login'
import LoginForm from "./Components/LoginForm";
import NoteForm from "./Components/NoteForm";
import Togglable from "./Components/Togglable";

const App = () => {
  const [notes,setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)
  const [errorMessage, setErrorMessage] = useState(null)
  const [username, setUsername] = useState('') 
  const [password, setPassword] = useState('') 
  const [user, setUser] = useState(null)

  useEffect(()=>{
    noteService
    .getAll()
    .then(initialNotes =>
      setNotes(initialNotes))
  }, [])

  useEffect(()=>{
    const loggedUserJSON = window.localStorage.getItem('loggedNoteappUser')
    if(loggedUserJSON){
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      noteService.setToken(user.token)
    }
  }, [])

  const addNote = (event) => {
    event.preventDefault()
    if(newNote.length>0){
      const noteObject = {
        content: newNote,
        important: Math.random() < 0.5
      }
      noteService.create(noteObject)
      .then(returnedNote => setNotes(notes.concat(returnedNote)))
      setNewNote('')
    }
  }

  const handleNoteChange = (event) => {
    setNewNote(event.target.value)
  }
  
  const toggleImportanceOf = (id) => {

    const note = notes.find(n => n.id === id)
    const changeNote = {...note, important:!note.important }

    noteService
    .update(id, changeNote)
    .then(returnedNote => setNotes(notes.map(n => n.id !== id ? n : returnedNote)))
    .catch(error => {
      setErrorMessage(`Note '${note.content}' was already deleted from server`)
      setTimeout(()=>{
        setErrorMessage(null)
      },5000)
      setNotes(notes.filter(n => n.id !== id))
    })
  }
  const handleLogin = async (event) => {
    event.preventDefault()
    
    try {
      const user = await loginService.login({
        username, password,
      })

      window.localStorage.setItem(
        'loggedNoteappUser', JSON.stringify(user))

      noteService.setToken(user.token)
      setUser(user)
      setUsername('')
      setPassword('')
    } catch (exception) {
      setErrorMessage('Wrong credentials')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
  }

  const notesToShow = showAll
  ? notes
  : notes.filter(note=>note.important)

  const logout = () => {
    window.localStorage.removeItem('loggedNoteappUser')
    location.reload()
    }    
 
  return (
    <div>
      <h1>Notes</h1>
      <Notification message={errorMessage}/>
      {!user && <>
        <Togglable buttonLabel='login'>
          <LoginForm password={password} username={username}
            handleLogin={handleLogin} 
            handleUsernameChange={({ target }) => setUsername(target.value)}
            handlePasswordChange={({target})=> setPassword(target.value)}>
            </LoginForm>
        </Togglable>
      </>}
      {user && <div>
         <p>{user.name} logged in</p>
         <Togglable buttonLabel='new note'>
            <NoteForm addNote={addNote} newNote={newNote}
                handleNoteChange={handleNoteChange}/>
         </Togglable>
          <br />
         <button onClick={logout}>logout</button>
      </div>
      }
      <br />
      <button onClick={()=> setShowAll(!showAll)}>
        show {showAll ? 'important' : 'all'}
      </button>
      <ul>
        {notesToShow.map(note => 
          <Note key={note.id} note={note}
          toggleImportance={ () => toggleImportanceOf(note.id)}/>
        )}
      </ul>
      <Footer/>
    </div>
  )
}

export default App
