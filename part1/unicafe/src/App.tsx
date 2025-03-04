import { useState } from "react"

export default function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const all = good + neutral + bad

  function handleGoodClick() {
    setGood(good + 1)
  }

  function handleNeutralClick() {
    setNeutral(neutral + 1)
  }

  function handleBadClick() {
    setBad(bad + 1)
  }

  return (
    <main>
      <h1>Give Feedback</h1>
      <div className="button-group">
        <Button onClick={handleGoodClick} text="Good" />
        <Button onClick={handleNeutralClick} text="Neutral" />
        <Button onClick={handleBadClick} text="Bad" />
      </div>
      {all ? (
        <Statistics good={good} neutral={neutral} bad={bad} />
      ) : (
        <p>No feedback given</p>
      )}
    </main>
  )
}

function Button({ onClick, text }: { onClick: () => void; text: string }) {
  return <button onClick={onClick}>{text}</button>
}

function Statistics({
  good,
  neutral,
  bad,
}: {
  good: number
  neutral: number
  bad: number
}) {
  const all = good + neutral + bad
  const average = all === 0 ? 0 : (good - bad) / all
  const positivePercentage = all === 0 ? 0 : (good / all) * 100

  return (
    <div className="statistics-wrapper">
      <h2>Statistics</h2>

      <table>
        <tbody>
          <StatisticLine text="Good" value={good} />
          <StatisticLine text="Neutral" value={neutral} />
          <StatisticLine text="Bad" value={bad} />
          <StatisticLine text="Average" value={average.toFixed(2)} />
          <StatisticLine
            text="Positive"
            value={positivePercentage.toFixed(2)}
            percentage={true}
          />
        </tbody>
      </table>
    </div>
  )
}

function StatisticLine({
  text,
  value,
  percentage,
}: {
  text: string
  value: number | string
  percentage?: boolean
}) {
  return (
    <tr>
      <th scope="row">{text}</th>
      <td>
        {value}
        {percentage ? " %" : ""}
      </td>
    </tr>
  )
}
