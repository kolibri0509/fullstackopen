const Part = (props) => {
  return(
    <p>{props.parts}</p>
  )
}

const Header = (props) => {
  return(
    <h1>{props.course}</h1>
  ) 
}

const Content = () => {
  const parts = [{
    name : 'Fundamentals of React',
    exercises:10
  },
    {
    name : 'Using props to pass data',
    exercises:7
  },
    {
    name : 'State of a component',
    exercises:14
  }]
  return(
      <div>
        <Part parts={parts[0].name + ' ' + parts[0].exercises}/>
        <Part parts={parts[1].name + ' ' + parts[1].exercises}/>
        <Part parts={parts[2].name + ' ' + parts[2].exercises}/>
      </div>
  )
}

const Total = (props) => {
  return(
    <p>Number of exercises {props.parts}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [{
    name : 'Fundamentals of React',
    exercises:10
  },
    {
    name : 'Using props to pass data',
    exercises:7
  },
    {
    name : 'State of a component',
    exercises:14
  }]

  return (
    <>
      <Header course={course}/>
      <Content/>
      <Total parts={parts[0].exercises + parts[1].exercises + parts[2].exercises}/>
    </>
  )
}

export default App
