import { useState, useEffect } from "react"
import axios from "axios"
import SearchField from "./components/SearchField"
import Persons from "./components/Persons"
import PersonForm from "./components/PersonForm"

export type PersonsType = { id: number; name: string; number: string }[]

export default function App() {
  const [persons, setPersons] = useState<PersonsType>([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    axios
      .get("http://localhost:3001/persons")
      .then((res) => setPersons(res.data))
  }, [])

  function handleSearch(newSearch: string) {
    setSearch(newSearch)
  }

  function handleSubmit(newPerson: PersonsType[number]) {
    const isNameExist = persons.some((person) => person.name === newPerson.name)

    if (isNameExist) {
      alert(`${newPerson.name} is already added to phonebook`)
      return false
    } else {
      setPersons([...persons, newPerson])
      return true
    }
  }

  const filteredPersons = search
    ? persons.filter((person) =>
        person.name.toLowerCase().includes(search.toLowerCase())
      )
    : persons

  return (
    <main>
      <h1>Phonebook</h1>
      <SearchField value={search} onSearch={handleSearch} />
      <PersonForm onSubmit={handleSubmit} />

      <div className="numbers-wrapper">
        <h2>Numbers</h2>
        {persons.length > 0 ? (
          <Persons persons={filteredPersons} />
        ) : (
          <p>No numbers saved</p>
        )}
      </div>
    </main>
  )
}
