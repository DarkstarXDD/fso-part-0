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
      <div>
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
    <>
      <h2>Statistics</h2>
      <ul>
        <StatisticLine text="Good" value={good} />
        <StatisticLine text="Neutral" value={neutral} />
        <StatisticLine text="Bad" value={bad} />
        <StatisticLine text="Average" value={average} />
        <StatisticLine text="Positive" value={positivePercentage} />
      </ul>
    </>
  )
}

function StatisticLine({ text, value }: { text: string; value: number }) {
  return (
    <li>
      {text}: {value}
    </li>
  )
}
