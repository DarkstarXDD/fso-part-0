export default function App() {
  const course = "Half Stack application development"

  const part1 = {
    name: "Fundamentals of React",
    exercises: 10,
  }

  const part2 = {
    name: "Using props to pass data",
    exercises: 7,
  }

  const part3 = {
    name: "State of a component",
    exercises: 14,
  }

  const total = part1.exercises + part2.exercises + part3.exercises

  return (
    <main>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Total total={total} />
    </main>
  )
}

function Header({ course }: { course: string }) {
  return <h1>{course}</h1>
}

type Part = {
  name: string
  exercises: number
}

type ContentProps = {
  part1: Part
  part2: Part
  part3: Part
}

function Content({ part1, part2, part3 }: ContentProps) {
  return (
    <>
      <Part partName={part1.name} numOfExercises={part1.exercises} />
      <Part partName={part2.name} numOfExercises={part2.exercises} />
      <Part partName={part3.name} numOfExercises={part3.exercises} />
    </>
  )
}

function Part({
  partName,
  numOfExercises,
}: {
  partName: string
  numOfExercises: number
}) {
  return (
    <p>
      {partName} {numOfExercises}
    </p>
  )
}

function Total({ total }: { total: number }) {
  return <p>Number of exercises {total}</p>
}
