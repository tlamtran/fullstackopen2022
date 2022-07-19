import React from "react";

const Header = ({ course }) => <h1>{course.name}</h1>

const Total = ({ parts }) => {
    const sum = parts
                .map( p => p.exercises )
                .reduce( (x, y) => x+y, 0)

    return(
        <b>total of {sum} exercises</b>
    )
}

const Part = ({ part }) => 
  <p>
    {part.name} {part.exercises}
  </p>


const Content = ({ parts }) => {
    return(
        parts.map(p => <Part key={p.id} part={p}/>)
    )
}


const Course = ({course}) => {
    return(
        <div>
            <Header course={course}/>
            <Content parts={course.parts}/>
            <Total parts={course.parts}/>
        </div>
    )
}

export default Course