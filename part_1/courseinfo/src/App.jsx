const Part = (props) => {
  return(
    <p>{props.part} {props.exercises}</p>
  )
}

const Header = (props) => {
  return(
    <h1>{props.course}</h1>
  ) 
}

const Content = (props) => {
  const part = ['Fundamentals of React', 'Using props to pass data', 'State of a component']
  const exercises = [10, 7, 14]
  return(
      <div>
        <Part part={part[0]} exercises={exercises[0]}/>
        <Part part={part[1]} exercises={exercises[1]}/>
        <Part part={part[2]} exercises={exercises[2]}/>
      </div>
  )
}

const Total = (props) => {
  return(
    <p>Number of exercises {props.exercises}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const exercises = [10, 7, 14]
  return (
    <>
      <Header course={course}/>
      <Content/>
      <Total exercises={exercises.reduce(function(a, b){return a+b},0)}/>
    </>
  )
}

export default App
