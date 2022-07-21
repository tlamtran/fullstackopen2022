import axios from 'axios'
import { useState, useEffect } from 'react';
import Input from './components/Input';
import Filter from './components/Filter'

const App = () => {

  const [newCountries, setNewCountries] = useState([])
  const [newInput, setNewInput] = useState('')

  useEffect( () => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then( response => setNewCountries(response.data))
  }, [])

  const handleInputChange = (event) => {
    setNewInput(event.target.value)
  }

  return(
    <div>
      <Input text='find countries' value={newInput} onChange={handleInputChange}/>
      <Filter filter={newInput} countries={newCountries}/>
    </div>
  )
}

export default App;
