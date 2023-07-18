import { UserData, UserInterface } from "@/models/UserData";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getLogin } from "@/repository/users";
import { AxiosError } from "axios";

interface ValidationErrors {
  errorMessage: string
  field_errors: Record<string, string>
}

export const login = createAsyncThunk(
  'user/login',
  async () => {
    try {
      const response = await getLogin();
      return response.data;
    } catch (err) {
      let error = err as AxiosError<ValidationErrors>; // cast the error for access
      if (!error.response) {
        throw err
      }
      // We got validation errors, let's return those so we can reference in our component and set form errors
      return error.response.data
    }
  }
)
interface UserState {
  value: UserData | null;
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
  error: any;
};

const initalUserState = {
  value: null,
  loading: 'idle',
  error: null
} as UserState;

export const userSlice = createSlice({
  name: "user",
  initialState: initalUserState,
  reducers: {
    reset: () => initalUserState,
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      console.log(action.payload);

      state.loading = 'succeeded'

      const result = action.payload.data as UserInterface;
      const user = UserData.fromJson(result);

      state.value = user;
    });

    builder.addCase(login.pending, (state) => {
      state.loading = 'pending'
    });

    builder.addCase(login.rejected, (state, action) => {
      state.loading = 'failed'
      state.error = action.error.message
    });
  }
})

export const {
  reset,
} = userSlice.actions;

export default userSlice.reducer;
