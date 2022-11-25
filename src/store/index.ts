import { configureStore } from "@reduxjs/toolkit";
import { flightsApi } from "./flights/flights.api";

export const store = configureStore({
    reducer: {
        [flightsApi.reducerPath]: flightsApi.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(flightsApi.middleware)
})