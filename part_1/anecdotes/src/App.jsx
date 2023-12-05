import { useState } from 'react'

const Button = (props) => 
<button onClick={props.handleClick}>{props.text}</button>

const Counter = (props) => {
  return(
    <p>has {props.counter} votes</p>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const [counter, setCounter]  = useState(0)
  const [selected, setSelected] = useState(0)
  
  const points = new Array(anecdotes.length).fill(0)
  const [copy, setCopy] = useState([...points])
  
  let maxNumber = Math.max.apply(Math,copy)
  let index = copy.indexOf(maxNumber)

  const randomSelected = () => {
    setSelected(Math.floor(Math.random()*anecdotes.length)) 
  }
  
  const addVoice = () => {    
      copy [selected] += 1
      setCounter(counter + 1)
      setCopy(copy)
      console.log(copy)
      console.log(copy[selected])    
  }
  
  return (
    <div>
      <h2>Anecdote of the day</h2>
      {anecdotes[selected]} <br/> 
      <Counter counter={copy[selected]}/>
      <Button handleClick={()=>addVoice()} text ="vote"/>
      <Button handleClick={()=>randomSelected()} text="next anecdote"/>
      <h2>Anecdote with most votes</h2>
      <div>{anecdotes[index]}</div>
    </div>
  )
}

export default App
