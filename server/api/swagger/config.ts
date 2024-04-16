import swaggerJsDoc from "swagger-jsdoc";

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Facts API",
      version: "1.0.0",
      description: "A simple Express API",
    },
  },
  apis: ["api/**/*.yaml"],
};

export const swaggerDocs = swaggerJsDoc(swaggerOptions);
