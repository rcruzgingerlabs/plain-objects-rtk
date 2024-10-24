import { useAppSelector } from "../../app/hooks"
import { selectCounterValue } from "./counterSlice"

export function CounterView() {
  const value = useAppSelector(selectCounterValue)

  return <div>CounterView: The value is {value}</div>
}
