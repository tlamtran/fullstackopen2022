import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Input from './components/Input'
import Button from './components/Button'
import Notification from './components/Notification'
import numberServices from './services/numbers'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  useEffect( () => {
    numberServices  
      .getAll()
      .then( initialData => setPersons(initialData))
  }, [])

  const add = (event) => {
    if (newName !== '') {
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
        setErrorMessage("Added " + person.name)
        setTimeout( () => setErrorMessage(''), 5000)
      }
      else {
        if (window.confirm(newName + " is already added to phonebook, replace the old number with a new one?")) {
          const original = persons.find( p => p.name === newName)
          const copy = {...original, number: newNumber}
          numberServices
            .update(copy, original.id)
            .then( data => {
              setPersons(persons.map( p => p.id !== original.id ? p : copy))
              setNewName('')
              setNewNumber('')
            })
          setErrorMessage(original.name + " number has been updated")
          setTimeout( () => setErrorMessage(''), 5000)
        }
      }
    }
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
      <Notification message={errorMessage}/>
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