import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { increment, decrement, setCount } from "./store"

function App() {
  const count = useSelector((state) => state.counter.count)
  const dispatch = useDispatch()
  const [timeLeft, setTimeLeft] = useState(5)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev === 1) {
          const randomNumber = Math.floor(Math.random() * 101)
          dispatch(setCount(randomNumber))
          return 5
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [dispatch])

  return (
    <div className="app-container">
      <h1 className="title">Live Counter App</h1>
      <h2 className="count">Count: {count}</h2>

      <div className="button-group">
        <button className="btn increment" onClick={() => dispatch(increment())}>
          Increment
        </button>
        <button className="btn decrement" onClick={() => dispatch(decrement())}>
          Decrement
        </button>
      </div>

      <p className="timer">Next random update in {timeLeft} seconds…</p>
    </div>
  )
}

export default App
