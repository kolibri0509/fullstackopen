import Header from "./Header"
import Content from "./Content"
import Total from "./Total"

const Course = ({course}) => {
    const result = () => {
        let sum = 0
        for(let i=0;i<course.parts.length;i++){
            sum = sum + course.parts[i].exercises
        }
        return sum
    }
    
    return(
        <>
        <Header course={course.name}/>
        <Content course={course}/>
        <Total sum={result()}/>
        </>
    )
}
export default Course