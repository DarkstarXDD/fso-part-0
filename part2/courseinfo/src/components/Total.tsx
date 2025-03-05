import type { PartType } from "./Part"

export default function Total({ parts }: { parts: PartType[] }) {
  const total = parts.reduce(
    (currentTotal, part) => currentTotal + part.exercises,
    0
  )

  return <p>Total Number of Exercises: {total}</p>
}
