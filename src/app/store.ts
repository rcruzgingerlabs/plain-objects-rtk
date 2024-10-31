import {
  combineSlices,
  configureStore,
  type Action,
  type ThunkAction,
} from "@reduxjs/toolkit"
import {
  // eslint-disable-next-line @typescript-eslint/no-restricted-imports
  useDispatch as useDispatchOriginal,
  // eslint-disable-next-line @typescript-eslint/no-restricted-imports
  useSelector as useSelectorOriginal,
  type TypedUseSelectorHook,
} from "react-redux"
import { setupListeners } from "@reduxjs/toolkit/query"
import { counterSlice } from "@/features/counter/counterSlice"
import { notesSlice } from "@/features/notes/slice"

// `combineSlices` automatically combines the reducers using
// their `reducerPath`s, therefore we no longer need to call `combineReducers`.
const rootReducer = combineSlices(counterSlice, notesSlice)
// Infer the `RootState` type from the root reducer
export type RootState = ReturnType<typeof rootReducer>

export const useSelector: TypedUseSelectorHook<RootState> = useSelectorOriginal

// The store setup is wrapped in `makeStore` to allow reuse
// when setting up tests that need the same store config
export const makeStore = (preloadedState?: Partial<RootState>) => {
  const store = configureStore({
    reducer: rootReducer,
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: getDefaultMiddleware => {
      return getDefaultMiddleware()
    },
    preloadedState,
  })
  // configure listeners using the provided defaults
  // optional, but required for `refetchOnFocus`/`refetchOnReconnect` behaviors
  setupListeners(store.dispatch)
  return store
}

export const store = makeStore()

export const { dispatch } = store

export type Dispatch = typeof dispatch

export const useDispatch = useDispatchOriginal<Dispatch>

// Infer the type of `store`
export type AppStore = typeof store
// Infer the `AppDispatch` type from the store itself
export type AppDispatch = AppStore["dispatch"]
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>
