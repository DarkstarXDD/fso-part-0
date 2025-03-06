import { useState, useRef, type FormEvent, type ChangeEvent } from "react"
import Persons from "./components/Persons"

export type PersonsType = { name: string; phoneNumber: string }[]

export default function App() {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", phoneNumber: "040-1234567" },
  ])
  const [name, setName] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [search, setSearch] = useState("")
  const [filteredNameList, setFilteredNameList] = useState<
    PersonsType | undefined
  >()

  const nameInputRef = useRef<HTMLInputElement>(null)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const isNameExist = persons.some((person) => person.name === name)

    if (isNameExist) {
      alert(`${name} is already added to phonebook`)
    } else {
      setPersons([
        ...persons,
        {
          name: name,
          phoneNumber: phoneNumber,
        },
      ])
      setName("")
      setPhoneNumber("")
      nameInputRef.current?.focus()
    }
  }

  function handleSearch(e: ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value)
    setFilteredNameList(
      persons.filter((person) =>
        person.name.toLowerCase().includes(e.target.value.toLowerCase())
      )
    )
  }

  return (
    <main>
      <h1>Phonebook</h1>
      <label htmlFor="search">Search</label>
      <input type="text" id="search" value={search} onChange={handleSearch} />

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            required
            ref={nameInputRef}
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="phone-number">Phone Number</label>
          <input
            type="tel"
            required
            id="phone-number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>

        <button>Add</button>
      </form>

      <h2>Numbers</h2>
      {search ? (
        <Persons persons={filteredNameList} />
      ) : (
        <Persons persons={persons} />
      )}
    </main>
  )
}
