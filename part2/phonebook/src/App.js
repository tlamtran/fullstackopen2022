import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Input from './components/Input'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([]) 

  useEffect( () => {
    axios
      .get('http://localhost:3001/persons')
      .then( response => setPersons(response.data))
  }, [])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  const add = (event) => {
    event.preventDefault()

    if (persons.every( p => p.name !== newName)) {
      const person = {
        name: newName,
        number: newNumber,
        id: persons.length + 1
      }
      setPersons(persons.concat(person))
      setNewName('')
      setNewNumber('')
    }
    else alert(newName + ' is already added to phonebook')
    
  }

  const handleNameInputChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumInputChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Input text="filter shown with" value={newFilter} onChange={handleFilterChange}/>

      <h2>add new number</h2>
      <form>
        <Input text="name:" value={newName} onChange={handleNameInputChange}/>
        <Input text="number:" value={newNumber} onChange={handleNumInputChange}/>
        <div>
          <button type="submit" onClick={add}>
            add
          </button>
        </div>
      </form>

      <h2>Numbers</h2>
      <Filter persons={persons} filter={newFilter}/>
    </div>
  )
}

export default App