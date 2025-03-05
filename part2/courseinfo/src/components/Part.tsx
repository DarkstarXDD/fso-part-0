export type PartType = {
  id: number
  name: string
  exercises: number
}

export default function Part({ part }: { part: PartType }) {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  )
}
