import { configureStore } from "@reduxjs/toolkit";
import quoteSlice from "../feature/quoteSlice";

const store = configureStore({
    reducer: quoteSlice
})

export default store;