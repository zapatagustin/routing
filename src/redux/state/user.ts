import { createSlice } from "@reduxjs/toolkit";
import { UserInfo } from "../../models/user.model";

export const EmptyUserState: UserInfo = {
  id: 0,
  name: "",
  email: "",
};

export const userSlice = createSlice({
  name: "tuma",
  initialState: EmptyUserState,
  reducers: {
    createUser: (state, action) => {
      return action.payload;
    },
    updateUser: (state, action) => {
      return { ...state, ...action.payload };
    },
    resetUser: () => EmptyUserState,
  },
});

export const { createUser, updateUser, resetUser } = userSlice.actions;

export default userSlice.reducer;
