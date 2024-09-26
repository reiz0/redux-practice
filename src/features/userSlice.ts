import { createSlice } from "@reduxjs/toolkit";

export const userSlice= createSlice({
  name: "user",
  initialState: {
    firstname: "Yuki",
    lastname: "Higuchi",
    age: 22
  },
  reducers: {
    incrementAge: (state) => {
      state.age += 1;
    },
  },
});

export const { incrementAge } = userSlice.actions;

export const usersReducer = userSlice.reducer;