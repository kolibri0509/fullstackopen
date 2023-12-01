import { useState } from "react";
// 1
// const Display = ({counter}) => <div style={{margin: 10 + 'px'}}>{counter}</div>

// 4
const Display = props => <div>{props.value}</div>
  
const Button = (props) =>{
return(
    <button onClick={props.handleClick} style={{margin: 10 + 'px'}}>
      {props.text}
    </button>)
}

// const History = (props) =>{
//   if(props.allClicks.lenght === 0){
//     <div>the app is used by pressing the buttons</div>
//   }
//   return(
//     <div>button press history : {props.allClicks.join(' ')}</div>
//   )
// }


const App = () => {

  // 1
  // const[counter, setCounter] = useState(0);
  // const increaseByOne = () => setCounter(counter + 1);
  // const decreaseByOne = () => setCounter(counter - 1);
  // const setToZero = () => setCounter(0);

  // 2
  // const[clicks, setClicks] = useState({
  //   left:0,
  //   right:0,
  // })
  // const handleLeftClick = () =>
  //   setClicks({...clicks, left:clicks.left + 1})
  
  // const handleRightClick = () =>
  //   setClicks({...clicks, right:clicks.right + 1})

    // 3
    // const [left, setLeft]= useState(0)
    // const[right, setRight]=useState(0)
    // const [allClicks, setAll] = useState([])
    // const [total, setTotal] = useState(0)

    // const handleRightClicks = () =>{
    //   setAll(allClicks.concat('R'))
    //   const updateRight = right + 1
    //   setRight(updateRight)
    //   setTotal(left + updateRight)
    // }
      
    // const handleLeftClicks = () =>{
    //   setAll(allClicks.concat('L'))
    //   const updateLeft = left + 1
    //   setLeft(updateLeft)
    //   setTotal(updateLeft + right)
    // }

    // 4
    const [value, setValue] = useState(10)
    const setToValue = (newValue) =>{
      console.log('value now', newValue)
      setValue(newValue)
    }

  
  return (
    <>
    {/* 1
    <Display counter={counter}/>
    <Button onClick={increaseByOne} text={'Plus'}/>
    <Button onClick={decreaseByOne } text={'Minus'}/>
    <Button onClick={setToZero} text={'Zero'}/> */}

    {/* 2
    <div>
      {clicks.left}
      <Button onClick={handleLeftClick} text={'left'}/>
      <Button onClick={handleRightClick} text={'right'}/>
      {clicks.right}
    </div> */}

    {/* 3
    <div>
      {left}
      <Button onClick={handleLeftClicks} text={'left'}/>
      <Button onClick={handleRightClicks} text={'right'}/>
      {right}
      <History allClicks={allClicks}/>
      <p>total {total}</p>
    </div> */}

    {/* 4 */}
    <Display value={value}/>
    <Button handleClick= {()=> setToValue(1000)} text='thousand'/>
    <Button handleClick= {()=> setToValue(0)} text='reset'/>
    <Button handleClick= {()=> setToValue(value + 1)} text='plus'/>
    </>
  )
}

export default App
