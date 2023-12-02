import { useState } from "react";

const Button = (props) => {
  return(
    <button onClick={props.handleClick}>{props.text}</button>
  )
}
const Statistics = (props) => {
  if(props.sum===0){
    return <p>No feedback given</p>
  }
  return(
    <>
      <div>good {props.good}</div>
      <div>neutral {props.neutral}</div>
      <div>bad {props.bad}</div>

      <div>all {props.sum}</div>
      <div>average {props.average}</div>
      <div>positive {props.positiv}</div>
    </>   
  )
} 

const App = () => {
  const[good, setGood] = useState(0)
  const[neutral, setNeutral] = useState(0)
  const[bad, setBad] = useState(0)
  const incrementGood = () => setGood (good + 1)
  const incrementNeutral = () => setNeutral (neutral + 1)
  const incrementBad = () => setBad (bad + 1)
  const sum = good+neutral+bad
  const average = (good-bad)/sum
  const positivProcent = (good/sum)*100
  

  return (
    <>
    <h2>give feedback</h2>
    <Button handleClick= {()=> incrementGood()} text='good'/>
    <Button handleClick= {()=> incrementNeutral()} text='neutral'/>
    <Button handleClick= {()=> incrementBad()} text='bad'/>
    
    <h2>statistics</h2>
    <Statistics sum={sum} average={sum===0 ? 0:average} positiv={sum===0 ? 0:positivProcent}
    good={good} neutral={neutral} bad={bad}/>

    </>
  )
}

export default App
