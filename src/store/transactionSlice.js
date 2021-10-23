import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    name: "A",
    data: [
      {
        id: 1,
        amount: 1000,
        // date:
      },
      {
        id: 2,
        amount: -1000,
        // date:
      },
    ],
  },
  {
    id: 2,
    name: "B",
    data: [
      {
        id: 3,
        amount: 1000,
      },
      {
        id: 4,
        amount: -500,
      },
    ],
  },
];

export const transactionSlice = createSlice({
  name: "counter",
  initialState,
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
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } =
  transactionSlice.actions;

export default transactionSlice.reducer;
