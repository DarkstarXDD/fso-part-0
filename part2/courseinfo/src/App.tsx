import Course from "./components/Course"

const courses = [
  {
    id: 1,
    name: "Half Stack Application Development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2,
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3,
      },
    ],
  },

  {
    id: 2,
    name: "Node.js",
    parts: [
      {
        name: "Routing",
        exercises: 3,
        id: 1,
      },
      {
        name: "Middlewares",
        exercises: 7,
        id: 2,
      },
    ],
  },
]

export type CourseType = (typeof courses)[number]

export default function App() {
  return (
    <main>
      {courses.map((course) => (
        <Course key={course.id} course={course} />
      ))}
    </main>
  )
}
