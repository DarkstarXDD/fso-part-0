import { useState } from "react"

const anecdotes = [
  "If it hurts, do it more often.",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
  "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
  "The only way to go fast, is to go well.",
]

function getRandomIndex() {
  const randomIndex = Math.floor(Math.random() * anecdotes.length)
  return randomIndex
}

export default function App() {
  const [index, setIndex] = useState(getRandomIndex)

  const [votes, setVotes] = useState(() => {
    // map() will return a set of key-value pairs, which fromEntries() will convert into an object.
    const votesObject = Object.fromEntries(anecdotes.map((_, i) => [i, 0]))
    return votesObject
  })

  const maxNumOfVotes = Math.max(...Object.values(votes))
  const keyOfMaxVotes = Object.keys(votes).find(
    (key) => votes[Number(key)] === maxNumOfVotes
  )
  const anecdoteWithMostVotes = anecdotes[Number(keyOfMaxVotes)]

  return (
    <main>
      <div className="anecdote-wrapper">
        <h1>Anecdote of the Day</h1>
        <p>"{anecdotes[index]}"</p>
        <p className="vote-count">
          (has {votes[index]} {votes[index] > 1 ? "votes" : "vote"})
        </p>

        <div className="button-wrapper">
          <button
            onClick={() =>
              setVotes({
                ...votes,
                [index]: votes[index] + 1,
              })
            }
          >
            Vote
          </button>
          <button onClick={() => setIndex(getRandomIndex)}>
            Next Anecdote
          </button>
        </div>
      </div>

      <div className="anecdote-wrapper">
        <h2>Anecdote with Most Votes</h2>
        {maxNumOfVotes === 0 ? (
          <p>Not enough votes</p>
        ) : (
          <>
            <p>"{anecdoteWithMostVotes}"</p>
            <p className="vote-count">
              (has {votes[Number(keyOfMaxVotes)]}{" "}
              {maxNumOfVotes > 1 ? "votes" : "vote"})
            </p>
          </>
        )}
      </div>
    </main>
  )
}
