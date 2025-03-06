import { useState, type FormEvent } from "react"

export default function App() {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }])
  const [newName, setNewName] = useState("")

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const isNameExist = persons.some((person) => person.name === newName)

    if (isNameExist) {
      alert(`${newName} is already added to phonebook`)
    } else {
      setPersons([
        ...persons,
        {
          name: newName,
        },
      ])
      setNewName("")
    }
  }

  return (
    <main>
      <h1>Phonebook</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
        </div>

        <button>Add</button>
      </form>

      <h2>Numbers</h2>
      <ul>
        {persons.map((person, index) => (
          <li key={index}>{person.name}</li>
        ))}
      </ul>
    </main>
  )
}
