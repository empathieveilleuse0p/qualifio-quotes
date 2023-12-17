import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export interface QuoteType {
  author: string;
  authorSlug: string;
  content: string;
  dateAdded: string;
  dateModified: string;
  length: number;
  tags: string[];
  _id: string;
}

export interface RootState {
  quotes: QuoteState;
}

export interface QuoteState {
  quotes: QuoteType[];
  fetchStatus: string;
  fetchError: string;
}

export const fetchQuotes = createAsyncThunk("quotes/fetchQuotes", async () => {
  const response = await axios.get("http://localhost:3000/api/quotes");
  return response.data;
});

const initialState: QuoteState = {
  quotes: [],
  fetchStatus: "",
  fetchError: "",
};

export const quoteSlice = createSlice({
  name: "quotes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuotes.pending, (state) => {
        state.fetchStatus = "loading";
      })
      .addCase(fetchQuotes.fulfilled, (state, action) => {
        state.fetchStatus = "succeeded";
        state.quotes = action.payload;
      })
      .addCase(fetchQuotes.rejected, (state, action) => {
        state.fetchStatus = "failed";
        state.fetchError = action.error.message || "";
      });
  },
});

export const selectAllQuotes = (state: RootState) => state.quotes.quotes;
export const getFetchStatus = (state: RootState) => state.quotes.fetchStatus;
export const getFetchError = (state: RootState) => state.quotes.fetchError;

export default quoteSlice.reducer;
