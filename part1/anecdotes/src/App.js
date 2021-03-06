import { useState } from 'react'

const Button = ({onClick, text}) => {
  return(
    <button onClick={onClick}>{text}</button>
  )
}

const Title = ({title}) => {
  return(
    <h1>{title}</h1>
  )
}

const Content = ({anecdote, point}) => {
  return(
    <div>
      <p>{anecdote}</p>
      <p>has votes {point}</p>
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
   
  const [selected, setSelected] = useState(0)

  const [points, setPoints] = useState(Array(anecdotes.length).fill(0))

  const [max, setMax] = useState({index: 0, value: 0})

  function randIntInterval(min, max) {
    const randInt = Math.floor(Math.random() * (max - min + 1) + min)
    setSelected(randInt)
  }

  function vote() {
    const copy = { ...points }
    copy[selected] += 1
    if (copy[selected] > max.value) {
      setMax({index: selected, value: copy[selected]})
    }
    setPoints(copy)
  }

  return (
    <div>
      <Title title="Anecdote of the day"/>
      <Content anecdote={anecdotes[selected]} point={points[selected]}/>
      <Button onClick={() => vote()} text="vote" />
      <Button onClick={() => randIntInterval(0, anecdotes.length-1)} text="next anecdote"/>
      <Title title="Anecdote with most votes"/>
      <Content anecdote={anecdotes[max.index]} point={points[max.index]}/>
    </div>
  )
}

export default App