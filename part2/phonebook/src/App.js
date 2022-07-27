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
  const [successMessage, setSuccessMessage] = useState('')

  const errorStyle = {
    color: 'red',
    background: 'lightgrey',
    fontSize: 20,
    borderStyle: 'solid',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10
}

const successStyle = {
  color: 'green',
  background: 'lightgrey',
  fontSize: 20,
  borderStyle: 'solid',
  borderRadius: 5,
  padding: 10,
  marginBottom: 10
}

  useEffect( () => {
    numberServices  
      .getAll()
      .then( initialData => setPersons(initialData))
  }, [])

  const add = (event) => {
    event.preventDefault()
    if (newName !== '') {
  
      if (persons.every( p => p.name !== newName)) {
        const person = {
          name: newName,
          number: newNumber
        }
  
        numberServices
          .create(person)
          .then( data => {
            setPersons(data)
            setNewName('')
            setNewNumber('')
            setSuccessMessage("Added " + person.name)
            setTimeout( () => setSuccessMessage(''), 5000)
          })
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
              setSuccessMessage(original.name + " number has been updated")
              setTimeout( () => setSuccessMessage(''), 5000)
            })
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
              setPersons(persons.filter( person => person.name !== p.name))
            })
            .catch(error => {
              setErrorMessage("information of " + p.name + " has already been removed from server")
              setTimeout( () => setErrorMessage(''), 5000)
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
      <Notification message={errorMessage} style={errorStyle}/>
      <Notification message={successMessage} style={successStyle}/>
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