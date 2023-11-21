const Header = (props) => {
  return(
    <h1>{props.course}</h1>
  ) 
}

const Content = (props) => {
  return(
    <>
      <p>{props.part} {props.exercises}</p>
    </>  
  )
}

const Total = (props) => {
  return(
    <p>Number of exercises {props.exercises}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part = ['Fundamentals of React', 'Using props to pass data', 'State of a component']
  const exercises = [10, 7, 14]
  return (
    <div>
      <Header course={course}/>
      <Content part={part[0]} exercises={exercises[0]}/>
      <Content part={part[1]} exercises={exercises[1]}/>
      <Content part={part[2]} exercises={exercises[2]}/>
      <Total exercises={exercises.reduce(function(a, b){return a+b},0)}/>
    </div>
  )
}

export default App