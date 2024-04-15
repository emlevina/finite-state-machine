import { http, HttpResponse, passthrough } from "msw";

export const handlers = [
  http.get("https://numbersapi.p.rapidapi.com/:number/trivia", ({ params }) => {
    const { number } = params;
    if (number === "42") {
      return HttpResponse.error();
    }
    if (number === "12") {
      return passthrough();
    }
    return HttpResponse.text("This number is very very special");
  }),
  http.get("http://localhost:3000/api/facts/:number", ({ params }) => {
    const { number } = params;
    if (number === "42") {
      return HttpResponse.error();
    }
    if (number === "12") {
      return passthrough();
    }
    return HttpResponse.json({ fact: "This number is very very special" });
  }),
  http.get("/static/favicon.ico", () => {
    return passthrough();
  }),
  http.get("/", () => {
    return passthrough();
  }),
];
