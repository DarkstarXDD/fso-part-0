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
          {person.name}: {person.phoneNumber}
        </li>
      ))}
    </ul>
  )
}
