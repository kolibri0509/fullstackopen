const Part = (props) => {
  return(
    <p>{props.course}</p>
  )
}

const Header = (props) => {
  return(
    <h1>{props.course}</h1>
  ) 
}

const Content = () => {
  const course = {
    name :'Half Stack application development',
    parts: [
    {
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
}
  return(
      <div>
        <Part course={course.parts[0].name + ' ' + course.parts[0].exercises}/>
        <Part course={course.parts[1].name + ' ' + course.parts[1].exercises}/>
        <Part course={course.parts[2].name + ' ' + course.parts[2].exercises}/>
      </div>
  )
}

const Total = (props) => {
  return(
    <p>Number of exercises {props.course}</p>
  )
}

const App = () => {
  const course = {
    name :'Half Stack application development',
    parts: [
    {
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
}

  return (
    <>
      <Header course={course.name}/>
      <Content/>
      <Total course={course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises}/>
    </>
  )
}

export default App
