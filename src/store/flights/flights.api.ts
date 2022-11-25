import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IAirports } from "../../models/models";

export const flightsApi = createApi({
  reducerPath: "travel/api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://travel-advisor.p.rapidapi.com/",
    prepareHeaders: (headers, { getState }) => {
      headers.set(
        "X-RapidAPI-Key",
        "06916bbec3mshac9a1f0dbaf108cp144b39jsnf110264eb3b6"
      );
      headers.set("X-RapidAPI-Host", "travel-advisor.p.rapidapi.com");

      return headers;
    },
  }),
  endpoints: (build) => ({
    locationSearch: build.query<IAirports[], { query: string; locale: string }>({
      query: (body) => ({
        url: "airports/search",
        params: body,
        // per_page: 10
      }),
      transformResponse: (response: IAirports[]) => response
    }),
  }),
});

export const { useLocationSearchQuery } = flightsApi;
