export default function App() {
  const course = "Half Stack application development"

  const part1 = "Fundamentals of React"
  const exercises1 = 10

  const part2 = "Using props to pass data"
  const exercises2 = 7

  const part3 = "State of a component"
  const exercises3 = 14

  const total = exercises1 + exercises2 + exercises3

  return (
    <main>
      <Header course={course} />
      <Content
        part1={part1}
        exercises1={exercises1}
        part2={part2}
        exercises2={exercises2}
        part3={part3}
        exercises3={exercises3}
      />
      <Total total={total} />
    </main>
  )
}

function Header({ course }: { course: string }) {
  return <h1>{course}</h1>
}

type ContentProps = {
  part1: string
  exercises1: number
  part2: string
  exercises2: number
  part3: string
  exercises3: number
}

function Content({
  part1,
  exercises1,
  part2,
  exercises2,
  part3,
  exercises3,
}: ContentProps) {
  return (
    <>
      <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>
    </>
  )
}

function Total({ total }: { total: number }) {
  return <p>Number of exercises {total}</p>
}
