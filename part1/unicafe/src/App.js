import { useState } from 'react'

const Button = ({click, text}) => <button onClick={click}>{text}</button>

const Display = ({id, value}) => <p>{id} {value}</p>

const Title = ({title}) => <h1>{title}</h1>

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Title title="give feedback"/>
      <Button click={() => setGood(good + 1)} text="good"/>
      <Button click={() => setNeutral(neutral + 1)} text="neutral"/>
      <Button click={() => setBad(bad + 1)} text="bad"/>
      <Title title="statistics"/>
      <Display id="good" value={good}/>
      <Display id="neutral" value={neutral}/>
      <Display id="bad" value={bad}/>
    </div>
  )
}

export default App