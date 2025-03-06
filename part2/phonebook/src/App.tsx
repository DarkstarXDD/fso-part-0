import { useState, useRef, type FormEvent } from "react"

export default function App() {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", phoneNumber: "040-1234567" },
  ])
  const [name, setName] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")

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

  return (
    <main>
      <h1>Phonebook</h1>
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
      <ul>
        {persons.map((person, index) => (
          <li key={index}>
            {person.name}: {person.phoneNumber}
          </li>
        ))}
      </ul>
    </main>
  )
}
