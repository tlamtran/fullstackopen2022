import { useState } from 'react'
import Person from './components/Person'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const addName = (event) => {
    event.preventDefault()

    if (persons.every( p => p.name !== newName)) {
      const person = {
        name: newName
      }
      setPersons(persons.concat(person))
      setNewName('')
    }
    else alert(newName + ' is already added to phonebook')
    
  }

  const handleChange = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input value={newName} onChange={handleChange}/>
        </div>
        <div>
          <button type="submit" onClick={addName}>
            add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map( (p, i) => <Person person={p} key={i}/>)}
      </ul>
    </div>
  )
}

export default App