import React from "react";

const Header = ({ course }) => <h1>{course.name}</h1>


const Part = ({ part }) => 
  <p>
    {part.name} {part.exercises}
  </p>


const Content = ({ parts }) => {
    return(
        parts.map(p => <Part part={p}/>)
    )
}


const Course = ({course}) => {
    return(
        <div>
            <Header course={course}/>
            <Content parts={course.parts}/>
        </div>
    )
}

export default Course