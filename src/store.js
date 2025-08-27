import { configureStore, createSlice } from "@reduxjs/toolkit"

const counterSlice = createSlice({
  name: "counter",
  initialState: { count: 0 },
  reducers: {
    increment: (state) => {
      state.count += 1
    },
    decrement: (state) => {
      state.count -= 1
    },
    setCount: (state, action) => {
      state.count = action.payload
    },
  },
})

export const { increment, decrement, setCount } = counterSlice.actions

const store = configureStore({
  reducer: { counter: counterSlice.reducer },
})

export default store
