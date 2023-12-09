import Course from "./Components/Course"
const App = () => {
const course = [
{
  id: 1,
  name: 'Half Stack application development',
  parts: [
    {
      name: 'Fundamentals of React',
      exercises: 10,
      id: 1
    },
    {
      name: 'Using props to pass data',
      exercises: 7,
      id: 2
    },
    {
      name: 'State of a component',
      exercises: 14,
      id: 3
    },
    {
      name: 'Redux',
      exercises: 11,
      id: 4
    }
  ],
},
  {
    name: 'Node.js',
    id: 2,
    parts: [
      {
        name: 'Routing',
        exercises: 3,
        id: 1
      },
      {
        name: 'Middlewares',
        exercises: 7,
        id: 2
      }
    ]
  }
]
  return (
    <>
      {course.map(el => 
      <div key={el.id}>
        <h2> {el.name} </h2>
        <ul>{el.parts.map(a=><li key={a.id}>{a.name} {a.exercises}</li>)}</ul>
        <p>Total of {el.parts.reduce((acc, currentValue)=>{
          acc = acc + currentValue.exercises
          return acc
        },0)} exercises</p>
      </div>)}    
    </>
  )
}
export default App