# kate-state Library

kate-state is a custom finite state machine (FSM) library for JavaScript applications. It's designed to simplify state management, making your code more predictable and easier to understand.

## Features

- Easy integration with any JavaScript applications
- Simplified state management
- Predictable state transitions

## Installation

Before using the library, you need to build it. To do this, run the following command in the library directory:

```bash
npm run build
```

The library is not currently published to npm, so you can connect it in package.json as a local package, considering it's in the same directory as the project you want to use it in. Add the following line to the dependencies in your project's package.json file, replacing the path with the correct one if needed

```json
"dependencies": {
    "kate-state": "file:../kate-state",
    // other dependencies
}
```

## Tests

To run the tests for the library, use the following command:

```bash
npm run test
```

## Usage

Here's a basic example of how to use the library:

```tsx
import { createMachine } from "kate-state";

// Define your states, transitions and actions onEntry/onExit
const machine = createMachine({
  initial: "idle",
  states: {
    idle: {
      on: {
        FETCH: "loading",
      },
      onEntry: () => {
        console.log("Entering idle state");
      },
    },
    loading: {
      on: {
        RESOLVE: "success",
        REJECT: "error",
      },
      onExit: () => {
        console.log("Exiting loading state");
      },
    },
    success: {},
    error: {},
  },
});

// Extract the send and subscribe functions from the machine
const { send, subscribe } = machine;

// Subscribe to state changes
// The callback function will be called whenever the state changes
const unsubscribe = subscribe((state) => {
  console.log("Current state:", state);
});

// Call unsubscribe to stop listening to state changes
unsubscribe();

// Trigger a transition by sending an event
send("FETCH");
```

## Usage with React

In a React application, you can create the `useMachine` hook to integrate the state machine with your components. Such hook can be found in the `sample-app` directory in [useMachine.ts](../sample-app/src/hooks/useMachine.ts)
