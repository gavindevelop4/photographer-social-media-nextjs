import { user01 } from "@/mockData/UserList";
import { UserData } from "@/models/UserData";
import { createSlice } from "@reduxjs/toolkit";

interface UserState {
  value: UserData;
};

const initalUserState = {
  value: user01
} as UserState;

export const userSlice = createSlice({
  name: "userSlice",
  initialState: initalUserState,
  reducers: {
    reset: () => initalUserState,
  }
})

export const {
  reset,
} = userSlice.actions;

export default userSlice.reducer;
