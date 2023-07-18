import { FeedData, FeedInterface } from "@/models/FeedData";
import { getList } from "@/repository/feeds";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

interface ValidationErrors {
  errorMessage: string
  field_errors: Record<string, string>
}

export const getFeeds = createAsyncThunk(
  'feeds/getFeeds',
  async () => {
    try {
      const response = await getList();
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

interface FeedsState {
  value: Array<FeedData>;
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
  error: any;
}

const initalFeedState = {
  value: [],
  loading: 'idle',
  error: null
} as FeedsState;

export const feedsSlice = createSlice({
  name: "feeds",
  initialState: initalFeedState,
  reducers: {
    reset: () => initalFeedState,
  },
  extraReducers: (builder) => {
    builder.addCase(getFeeds.fulfilled, (state, action) => {
      console.log(action.payload);

      state.loading = 'succeeded'

      const resultList = action.payload.data as Array<FeedInterface>;

      const list = resultList.map((item: FeedInterface) => FeedData.fromJson(item))
      state.value = list;
    });

    builder.addCase(getFeeds.pending, (state) => {
      state.loading = 'pending'
    });

    builder.addCase(getFeeds.rejected, (state, action) => {
      state.loading = 'failed'
      state.error = action.error.message
    });
  }
})

export const {
  reset
} = feedsSlice.actions;

export default feedsSlice.reducer;