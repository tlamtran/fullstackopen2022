const Header = (props) => {
  return(
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  return(
    <p>{props.p} {props.ex}</p>
  )

}

const Content = (props) => {
  return(
    <div>
      <Part p={props.p1} ex={props.ex1}/>
      <Part p={props.p2} ex={props.ex2}/>
      <Part p={props.p3} ex={props.ex3}/>
    </div>
  )
}

const Total = (props) => {
  return(
    <p>Number of exercises {props.ex1 + props.ex2 + props.ex3}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course}/>
      <Content p1={part1.name} ex1={part1.exercises} 
      p2={part2.name} ex2={part2.exercises} 
      p3={part3.name} ex3={part3.exercises}/>
      <Total ex1={part1.exercises} 
      ex2={part2.exercises} 
      ex3={part3.exercises}/>
    </div>
  )
}

export default App