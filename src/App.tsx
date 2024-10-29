import "./App.css"
import { CounterView } from "./features/counter/CounterView"
import { increment, incrementByAmount } from "./features/counter/counterSlice"
import { useAppDispatch } from "./app/hooks"

const App = () => {
  const dispatch = useAppDispatch()

  return (
    <div className="App">
      <header className="App-header">
        <CounterView />
        <div
          style={{
            border: "1px solid green",
            marginTop: "1em",
          }}
        >
          <p>App component</p>
          <p>
            <button onClick={() => dispatch(increment())}>Increment</button>
          </p>
          <p>
            <button onClick={() => dispatch(incrementByAmount(5))}>
              Increment by 5
            </button>
          </p>
        </div>
      </header>
    </div>
  )
}

export default App
