import { createSelector, createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import Counter from "./counter"

export interface CounterSliceState {
  value: number
  status: "idle" | "loading" | "failed"
  counterObj: Counter
  dirtyCounter: number
}

const initialState: CounterSliceState = {
  value: 0,
  status: "idle",
  counterObj: new Counter(),
  dirtyCounter: 0,
}

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: create => ({
    increment: create.reducer(state => {
      // state.value += 1
      state.counterObj.increment(1)
      state.dirtyCounter += 1
    }),
    decrement: create.reducer(state => {
      state.value -= 1
    }),
    incrementByAmount: create.reducer(
      (state, action: PayloadAction<number>) => {
        // state.value += action.payload
        state.counterObj.increment(action.payload)
        state.dirtyCounter += 1
      },
    ),
  }),
  // You can define your selectors here. These selectors receive the slice
  // state as their first argument.
  selectors: {
    selectCount: counter => counter.value,
    selectCounterValue: createSelector(
      [
        counter => counter.counterObj.getValue(),
        counter => counter.dirtyCounter,
      ],
      (value, _) => value,
    ),
    // selectCounterValue: counter => counter.counterObj.getValue(),
  },
})

export const { decrement, increment, incrementByAmount } = counterSlice.actions

export const { selectCount, selectCounterValue } = counterSlice.selectors
