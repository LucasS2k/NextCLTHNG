import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    setCurrentUser: (state, action) => {
      state.user = {
        ...action.payload,
      };
    },
  },
});

export const selectUser = (state) => state.user;
export const { setCurrentUser } = userSlice.actions;
export default userSlice.reducer;
