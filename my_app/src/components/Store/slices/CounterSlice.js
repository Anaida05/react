import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 10 },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    reset : (state)=>{
      state.value = 10
    }
  },
});

export const { increment, decrement, incrementByAmount,reset } = counterSlice.actions;

export default counterSlice.reducer;
