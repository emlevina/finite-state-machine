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

## Features

### Custom UI-components

The application includes several custom UI components located in the `ui-components` directory:

- `Box`: A wrapper component with custom styles.
- `Button`: A reusable button component.
- `Container`: A container component for layout purposes.
- `Input`: A reusable input field component.
- `Stack`: A stack layout component.
- `ThemeSwitch`: A switch component for changing themes.

Each of these components has its own directory under `ui-components`, which includes the component file, a module SCSS file for styles, and a TypeScript definition file for the styles. Some components also include a test file in a `__tests__` subdirectory.

## Custom hooks

The application includes several custom hooks located in the `hooks` directory:

- `useMachine`: A hook for integrating stateMachine from `kate-state` library with React components. It manages subscription to the state machine and updates the component when the state changes.
- `useResponsive`: A hook for responsive design, adjusts the UI based on the device's screen size. This hook is then used in custom ui to enable responsiveness defined by user.

These hooks are used throughout the application to manage state and handle responsiveness.

### Mock Service Worker

In this application, we use [Mock Service Worker (MSW)](https://mswjs.io/) to intercept network requests and return mocked responses. This is particularly useful for testing, as it allows us to simulate various server responses without actually making a network request.

The mock handlers are defined in the `mocks/handlers.ts` file. Each handler corresponds to a specific API endpoint and returns a predefined response. The handlers are used to create a mock service worker in the `mocks/worker.ts` file.
