import Header from "./Header"
import Content from "./Content"
import Total from "./Total"
import type { CourseType } from "../App"

export default function Course({ course }: { course: CourseType }) {
  return (
    <>
      <Header courseName={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </>
  )
}
