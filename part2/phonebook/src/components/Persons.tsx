import { PersonsType } from "../App"

export default function Persons({
  persons,
}: {
  persons: PersonsType | undefined
}) {
  return (
    <ul>
      {persons?.map((person, index) => (
        <li key={index}>
          <span>{person.name}</span>
          <span>{person.phoneNumber}</span>
        </li>
      ))}
    </ul>
  )
}
