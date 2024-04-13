# Sample App

This is a sample application demonstrating the use of the `kate-state` library, a custom implementation of a finite state machine in a React TypeScript project.

## Structure

The application is structured as follows:

- `App.tsx`: The main application component.
- `components`: Contains various React components used in the application.
- `hooks`: Contains custom React hooks, including `useMachine.ts` which integrates the state machine with the React components.
- `machines`: Contains the definitions of the state machines used in the application.
- `mocks`: Contains mock handlers and workers for testing.
- `services`: Contains services used in the application, such as API calls.
- `store.ts`: The Redux store of the application.
- `themes`: Contains the theme and styling information for the application.
- `types`: Contains TypeScript type definitions.
- `ui-components`: Contains reusable UI components.

## Installation

Ensure that you have Node.js ^18.0.0 and npm installed on your machine to be able to install and run the application.

Install the dependencies by running the following command:

```bash
cd sample-app
npm install
```

## Running the App

After installation, you can start the application by running:

```bash
npm run start
```

To run the tests, use the following command:

```bash
npm run test
```
