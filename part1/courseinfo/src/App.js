const Header = p => {
  return(
    <h1>{p.course.name}</h1>
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
      <Part name={p.course.parts[0].name} ex={p.course.parts[0].exercises}/>
      <Part name={p.course.parts[1].name} ex={p.course.parts[1].exercises}/>
      <Part name={p.course.parts[2].name} ex={p.course.parts[2].exercises}/>
    </div>
  )
}

const Total = p => {
  return(
    <p>Number of exercises {p.course.parts[0].exercises + p.course.parts[1].exercises + p.course.parts[2].exercises}</p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }


  return (
    <div>
      <Header course={course}/>
      <Content course={course}/>
      <Total course={course}/>
    </div>
  )
}

export default App