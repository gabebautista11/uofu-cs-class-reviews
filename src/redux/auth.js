import { createSlice } from "@reduxjs/toolkit";
import { getAuth } from "firebase/auth";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: getAuth().currentUser,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUser } = authSlice.actions;

export default authSlice.reducer;
