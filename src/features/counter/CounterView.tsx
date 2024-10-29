import { useAppSelector } from "../../app/hooks"
import { selectCounterValue } from "./counterSlice"

export function CounterView() {
  const value = useAppSelector(selectCounterValue)

  return (
    <div
      style={{
        border: "1px solid red",
      }}
    >
      CounterView component: The value is {value}
    </div>
  )
}
