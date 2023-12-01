import { useState } from "react";

const Button = (props) => {
  return(
    <button onClick={props.handleClick}>{props.text}</button>
  )
}
const Display = (props) => <div>{props.text} {props.value}</div>

const App = () => {
  const[good, setGood] = useState(0)
  const[neutral, setNeutral] = useState(0)
  const[bad, setBad] = useState(0)
  const incrementGood = () => setGood (good + 1)
  const incrementNeutral = () => setNeutral (neutral + 1)
  const incrementBad = () => setBad (bad + 1)
  const sum = good+neutral+bad
  const positivProcent = (good/sum)*100
  

  return (
    <>
    <h2>give feedback</h2>
    <Button handleClick= {()=> incrementGood()} text='good'/>
    <Button handleClick= {()=> incrementNeutral()} text='neutral'/>
    <Button handleClick= {()=> incrementBad()} text='bad'/>
    
    <h2>statistics</h2>
    <Display value={good} text='good'/>
    <Display value={neutral} text='neutral'/>
    <Display value={bad} text='bad'/>
    <Display value={sum} text='all'/>
    <Display value={sum===0 ? 0 : (good-bad)/sum} text='average'/>
    <Display value={sum===0 ? 0 : positivProcent} text='positive'/>
    </>
  )
}

export default App
