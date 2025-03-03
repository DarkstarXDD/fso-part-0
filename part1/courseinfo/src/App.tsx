export default function App() {
  const course = "Half Stack application development"

  const parts = [
    {
      name: "Fundamentals of React",
      exercises: 10,
    },
    {
      name: "Using props to pass data",
      exercises: 7,
    },
    {
      name: "State of a component",
      exercises: 14,
    },
  ]

  return (
    <main>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </main>
  )
}

function Header({ course }: { course: string }) {
  return <h1>{course}</h1>
}

type PartType = {
  name: string
  exercises: number
}

function Content({ parts }: { parts: PartType[] }) {
  return (
    <>
      <Part part={parts[0]} />
      <Part part={parts[1]} />
      <Part part={parts[2]} />
    </>
  )
}

function Part({ part }: { part: PartType }) {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  )
}

function Total({ parts }: { parts: PartType[] }) {
  const total = parts[0].exercises + parts[1].exercises + parts[2].exercises
  return <p>Number of exercises {total}</p>
}
