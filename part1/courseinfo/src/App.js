const Header = (props) => {
  return(
    <h1>{props.course}</h1>
  )
}

const Part = part => {
  return(
    <p>{part.name} {part.ex}</p>
  )

}

const Content = p => {
  return(
    <div>
      <Part name={p.parts[0].name} ex={p.parts[0].exercises}/>
      <Part name={p.parts[1].name} ex={p.parts[1].exercises}/>
      <Part name={p.parts[2].name} ex={p.parts[2].exercises}/>
    </div>
  )
}

const Total = p => {
  return(
    <p>Number of exercises {p.parts[0].exercises + p.parts[1].exercises + p.parts[2].exercises}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course}/>
      <Content parts={parts}/>
      <Total parts={parts}/>
    </div>
  )
}

export default App