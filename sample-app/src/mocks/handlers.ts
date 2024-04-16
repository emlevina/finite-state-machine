import { http, HttpResponse, passthrough } from "msw";

export const handlers = [
  http.get("http://localhost:3000/api/facts/:number", ({ params }) => {
    const { number } = params;
    if (number === "42") {
      return HttpResponse.error();
    }
    if (number === "12" || number === "188") {
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
