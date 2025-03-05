import Part from "./Part"
import Total from "./Total"
import type { PartType } from "./Part"

export default function Content({ parts }: { parts: PartType[] }) {
  return (
    <table>
      <thead>
        <tr>
          <th scope="col">Part Name</th>
          <th scope="col">Num of Exercises</th>
        </tr>
      </thead>
      <tbody>
        {parts.map((part) => (
          <Part key={part.id} part={part} />
        ))}
      </tbody>
      <tfoot>
        <Total parts={parts} />
      </tfoot>
    </table>
  )
}
