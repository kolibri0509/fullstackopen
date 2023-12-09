import Part from "./Part"

const Content = (props) => {
    return (
        <ul>
        {props.parts.map(part=>
        <Part name={part.name}
         exercises={part.exercises} 
         key={part.id}/>)}
        </ul>
    )
}
export default Content