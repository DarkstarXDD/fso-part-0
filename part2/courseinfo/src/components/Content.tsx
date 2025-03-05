import Part from "./Part"
import type { PartType } from "./Part"

export default function Content({ parts }: { parts: PartType[] }) {
  return (
    <>
      {parts.map((part) => (
        <Part key={part.id} part={part} />
      ))}
    </>
  )
}
