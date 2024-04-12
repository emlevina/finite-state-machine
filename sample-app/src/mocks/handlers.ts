import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("https://numbersapi.p.rapidapi.com/:number/trivia", ({ params }) => {
    const { number } = params;
    return HttpResponse.text("Mocked response: " + number);
  }),
];
