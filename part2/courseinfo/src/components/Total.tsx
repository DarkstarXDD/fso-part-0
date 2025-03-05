import type { PartType } from "./Part"

export default function Total({ parts }: { parts: PartType[] }) {
  const total = parts.reduce(
    (currentTotal, part) => currentTotal + part.exercises,
    0
  )

  return (
    <tr>
      <th scope="row">Total number of exercises</th>
      <td>{total}</td>
    </tr>
  )
}
