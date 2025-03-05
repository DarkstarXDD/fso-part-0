export type PartType = {
  id: number
  name: string
  exercises: number
}

export default function Part({ part }: { part: PartType }) {
  return (
    <tr>
      <td>{part.name}</td>
      <td>{part.exercises}</td>
    </tr>
  )
}
