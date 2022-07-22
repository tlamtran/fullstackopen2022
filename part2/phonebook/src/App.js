import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Input from './components/Input'
import Button from './components/Button'
import numberServices from './services/numbers'

const App = () => {
  const [persons, setPersons] = useState([]) 

  useEffect( () => {
    numberServices  
      .getAll()
      .then( initialData => setPersons(initialData))
  }, [])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  const add = (event) => {
    event.preventDefault()

    if (persons.every( p => p.name !== newName)) {
      const person = {
        name: newName,
        number: newNumber
      }

      numberServices
        .create(person)
        .then( data => {
          setPersons(persons.concat(data))
          setNewName('')
          setNewNumber('')
        })
    }
    else alert(newName + ' is already added to phonebook')  
  }

  const removePerson = (p) => {
    return(
      () => {
        if (window.confirm("Delete " + p.name + "?")) {
          numberServices
            .remove(p.id)
            .then( () => {
              numberServices
                .getAll()
                .then( updatedData => setPersons(updatedData))
            })
          
        }
      }
    )
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
      <h1>Phonebook</h1>
      <Input text="filter shown with" value={newFilter} onChange={handleFilterChange}/>
      <h2>add new number</h2>
      <form>
        <Input text="name:" value={newName} onChange={handleNameInputChange}/>
        <Input text="number:" value={newNumber} onChange={handleNumInputChange}/>
        <Button type="submit" text="add" onClick={add}/>
      </form>
      <h2>Numbers</h2>
      <Filter persons={persons} filter={newFilter} removePerson={removePerson}/>
    </div>
  )
}

export default App