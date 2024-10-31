import { createSelector, createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import Counter from "./counter"

export interface CounterSliceState {
  value: number
  status: "idle" | "loading" | "failed"
  // counterObj: Counter
  counter: {
    model: Counter
  }
  // dirtyCounter: number
}

const initialState: CounterSliceState = {
  value: 0,
  status: "idle",
  // counterObj: new Counter(),
  counter: {
    model: new Counter(),
  },
  // dirtyCounter: 0,
}

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: create => ({
    increment: create.reducer(state => {
      // state.value += 1
      // state.counterObj.increment(1)
      // state.dirtyCounter += 1
      state.counter.model.increment(1)
      state.counter = { model: state.counter.model }
    }),
    decrement: create.reducer(state => {
      state.value -= 1
    }),
    incrementByAmount: create.reducer(
      (state, action: PayloadAction<number>) => {
        // state.value += action.payload
        // state.counterObj.increment(action.payload)
        // state.dirtyCounter += 1
        state.counter.model.increment(action.payload)
        state.counter = { model: state.counter.model }
      },
    ),
  }),
  // You can define your selectors here. These selectors receive the slice
  // state as their first argument.
  selectors: {
    selectCount: counter => counter.value,
    selectCounterValue: createSelector(
      [
        // counter => counter.counterObj.getterValue,
        // counter => counter.dirtyCounter,
        counter => counter.counter.model.getValue(),
        counter => counter.counter,
      ],
      (value, _) => value,
    ),
    // selectCounterValue: counter => counter.counterObj.getValue(),
  },
})

export const { decrement, increment, incrementByAmount } = counterSlice.actions

export const { selectCount, selectCounterValue } = counterSlice.selectors
