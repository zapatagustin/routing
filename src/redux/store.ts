import { configureStore } from "@reduxjs/toolkit";
import { UserInfo } from "../models/user.model";
import { userSlice } from "./state/user";

export interface AppStore {
  user: UserInfo;
}

export default configureStore<AppStore>({
  reducer: {
    user: userSlice.reducer,
  },
});
