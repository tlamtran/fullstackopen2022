import { useState } from 'react'

const Button = ({click, text}) => <button onClick={click}>{text}</button>

const StatisticLine = ({id, value}) => {
  return(
    <tr style={{textAlign: "left"}}>
      <td>{id}</td>
      <td>{value}</td>
    </tr>
  )
}

const Title = ({title}) => <h1>{title}</h1>

const Statistics = ({good, bad, neutral, all}) => {
  const average = (good - bad) / all
  const positive = (good / all) * 100 + " %"

  if (all > 0) {
    return(
      <table>
        <tbody style={{ textAlign: "right" }}>
          <StatisticLine id="good" value={good}/>
          <StatisticLine id="neutral" value={neutral}/>
          <StatisticLine id="bad" value={bad}/>
          <StatisticLine id="all" value={all}/>
          <StatisticLine id="average" value={average}/>
          <StatisticLine id="positive" value={positive}/>
        </tbody>
      </table>
    )
  }
  else {
    return(<p>No feedback given</p>)
  }
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  const handleGood = () => {
    setAll(all + 1)
    setGood(good + 1)
  }

  const handleNeutral = () => {
    setAll(all + 1)
    setNeutral(neutral + 1)
  }

  const handleBad = () => {
    setAll(all + 1)
    setBad(bad + 1)
  }

  return (
    <div>
      <Title title="give feedback"/>
      <Button click={()=> handleGood()} text="good"/>
      <Button click={()=> handleNeutral()} text="neutral"/>
      <Button click={()=> handleBad()} text="bad"/>
      <Title title="statistics"/>
      <Statistics good={good} bad={bad} neutral={neutral} all={all}/>
    </div>
  )
}

export default App