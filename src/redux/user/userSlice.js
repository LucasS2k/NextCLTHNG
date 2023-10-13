import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.user = action.payload;
    },
    clearCurrentUser: (state) => {
      state.user = null;
    },
  },
});

export const { setCurrentUser, clearCurrentUser } = userSlice.actions;

export const selectUser = (state) => state.user;

export default userSlice.reducer;
