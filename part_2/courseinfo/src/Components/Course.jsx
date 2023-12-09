import Header from "./Header"
import Content from "./Content"
import Total from "./Total"

const Course = (props) => {
    return (
        <div>
            <Header name={props.name}/>
            <Content parts={props.parts}/>
            <Total sum={props.parts.reduce((acc, currentValue)=>{
              acc = acc + currentValue.exercises
              return acc;
            },0)}/>
        </div>
      )
}
export default Course