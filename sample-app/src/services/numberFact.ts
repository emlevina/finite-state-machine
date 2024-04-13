import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiKey = process.env.REACT_APP_RAPID_API_KEY!;

export const numberFactApi = createApi({
  reducerPath: "numberFactApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://numbersapi.p.rapidapi.com",
    prepareHeaders: (headers) => {
      headers.set("X-RapidAPI-Key", apiKey);
      headers.set("X-RapidAPI-Host", "numbersapi.p.rapidapi.com");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getNumber: builder.query({
      query: (number) => ({
        url: `${number}/trivia`,
        responseHandler: (response) => response.text(),
      }),
    }),
  }),
});

export const { useGetNumberQuery } = numberFactApi;
