# Server

This is a TypeScript Express server for our application. The server is deployed on Vercel and provides an API endpoint for fetching facts about numbers.

You can access the production version of the server at [https://finite-state-machine.vercel.app](https://finite-state-machine.vercel.app).

## Structure

The server is structured as follows:

- `controllers`: Contains the logic for handling requests and responses. The `facts.ts` file handles requests related to facts.
- `db`: Contains the logic for connecting to the database. The `connect.ts` file exports a function to establish a connection to the MongoDB database.
- `middleware`: Contains middleware functions for the Express app. The `connectToDB.ts` file exports a middleware function that connects to the database before handling a request.
- `models`: Contains the Mongoose models for the application. The `Fact.ts` file defines the schema and model for facts.
- `routers`: Contains the Express routers for the application. The `facts.ts` file defines routes related to facts.
- `swagger`: Contains the Swagger UI configuration and documentation for the API. The `facts.yaml` file contains the Swagger documentation for the facts API.

## Running the Server

The server is configured to work with Vercel, so it's recommended to run it using the Vercel CLI. To run the server in development mode, use the following command:

```bash
vercel dev
```
