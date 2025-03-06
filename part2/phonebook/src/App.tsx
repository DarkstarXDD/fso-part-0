import { useState } from "react"
import SearchField from "./components/SearchField"
import Persons from "./components/Persons"
import PersonForm from "./components/PersonForm"

export type PersonsType = { name: string; phoneNumber: string }[]

export default function App() {
  const [persons, setPersons] = useState<PersonsType>([])
  const [search, setSearch] = useState("")

  function handleSearch(newSearch: string) {
    setSearch(newSearch)
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
      <PersonForm
        persons={persons}
        onSubmit={(newPersons: PersonsType) => setPersons(newPersons)}
      />

      <h2>Numbers</h2>
      {persons.length > 0 ? (
        <Persons persons={filteredPersons} />
      ) : (
        <p>No numbers saved</p>
      )}
    </main>
  )
}
