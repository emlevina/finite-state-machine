import { http, HttpResponse, passthrough } from "msw";

export const handlers = [
  http.get("https://numbersapi.p.rapidapi.com/:number/trivia", ({ params }) => {
    const { number } = params;
    if (number === "42") {
      return HttpResponse.error();
    }
    return HttpResponse.text("This number is very very special");
  }),
  http.get("/static/favicon.ico", () => {
    return passthrough();
  }),
  http.get("/", () => {
    return passthrough();
  }),
];
