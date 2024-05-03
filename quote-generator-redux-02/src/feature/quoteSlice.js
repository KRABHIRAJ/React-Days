import { createSlice , createAsyncThunk} from "@reduxjs/toolkit"

export const fetchRandomQuote = createAsyncThunk(
    "quote/fetchRandom",
    async () => {
      const response = await fetch("https://api.quotable.io/random");
      const data = await response.json();
      return data;
    }
  );
const initialState = {
    isLoading: false,
    randomQuote: {},
}

const quoteSlice = createSlice({
    name:'quote',
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(fetchRandomQuote.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(fetchRandomQuote.fulfilled, (state, action) => {
            state.isLoading = false;
            state.randomQuote = action.payload;
        })
    }
})


export default quoteSlice.reducer;