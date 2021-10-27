import { createSlice } from "@reduxjs/toolkit";

// const initialState = [
//   {
//     id: 1,
//     name: "A",
//     balance: 100,
//     data: [
//       {
//         id: 1,
//         amount: 1000,
//         status: "",
//         date: "",
//       },
//       {
//         id: 2,
//         amount: -1000,
//         status: "",
//         date: "",
//       },
//     ],
//   },
//   {
//     id: 2,
//     name: "B",
//     balance: 100,
//     data: [
//       {
//         id: 3,
//         amount: 1000,
//         status: "",
//         date: "",
//       },
//       {
//         id: 4,
//         amount: -500,
//         status: "",
//         date: "",
//       },
//     ],
//   },
// ];

const initialState = [];
export const transactionSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.push(action.payload);
    },
    deleteContact: (state, action) => {
      return state.filter((transaction) => transaction.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = transactionSlice.actions;

export default transactionSlice.reducer;
