import { useState, useRef, type FormEvent } from "react"
import { PersonsType } from "../App"

export default function PersonForm({
  onSubmit,
}: {
  onSubmit: (newPerson: PersonsType[number]) => boolean
}) {
  const [name, setName] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")

  const nameInputRef = useRef<HTMLInputElement>(null)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (onSubmit({ name: name, phoneNumber: phoneNumber })) {
      setName("")
      setPhoneNumber("")
      nameInputRef.current?.focus()
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-field">
        <label htmlFor="name">Name:</label>
        <input
          required
          ref={nameInputRef}
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="input-field">
        <label htmlFor="phone-number">Phone Number</label>
        <input
          type="tel"
          required
          id="phone-number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </div>

      <button>Add new contact</button>
    </form>
  )
}
