import Header from "./Header"
import Content from "./Content"
import Total from "./Total"

const Course = ({course}) => {
    
    const result = course.parts.reduce((accumulator,currentValue)=>{
        accumulator = accumulator + currentValue.exercises
        return accumulator
    },0)
    
    return(
        <>
        <Header course={course.name}/>
        <Content course={course}/>
        <Total sum={result}/>
        </>
    )
}
export default Course