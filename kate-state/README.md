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

## Creating a Machine

The `createMachine` function takes a configuration object as its argument. This object defines the states of your state machine, the transitions between them, and any actions that should be performed when entering or exiting a state. Here's a breakdown of the properties you can include in your configuration object:

### `initial`

A string that specifies the name of the initial state of the machine. This is the state that the machine will be in when it is first created.

Example:

```javascript
initial: "idle",
```

### `states`

An object that defines the states of the machine. Each key in this object is the name of a state, and the value is another object that defines the behavior of that state.

Each state object can have the following properties:

- `on`: An object that defines the transitions from this state. Each key in this object is the name of an event, and the value is the name of the state to transition to when that event is received.
- `onEntry`: A function that will be called when the machine enters this state. This function is called with the current context and a setContext function that can be used to update the context.
- `onExit`: A function that will be called when the machine exits this state. This function is called with the current context and a setContext function that can be used to update the context.

Example:

```javascript
  states: {
    idle: {
      on: {
        FETCH: "loading",
      },
      onEntry: (context, setContext) => {
        console.log("Entering idle state");
      },
    },
    loading: {
      on: {
        RESOLVE: "success",
        REJECT: "error",
      },
      onExit: (context, setContext) => {
        console.log("Exiting loading state");
      },
    },
    success: {},
    error: {},
  },
```

### `context` (optional)

An object that defines the initial context of the machine. The context is a set of data that can be used by the onEntry and onExit functions, and can be updated using the setContext function.

Example:

```javascript
context: {
  count: 0,
},
```

## Subscribing to State Changes

You can subscribe to state changes by calling the `subscribe` function on the machine object. This function takes a callback function as its argument, which will be called whenever the state changes. The callback function is called with 2 or 3 arguments: the new state, the context, and the error if event wasn't valid.

The `subscribe` function returns a function that you can call to stop listening to state changes.

## Usage

Here's a basic example of how to use the library:

```tsx
import { createMachine } from "kate-state";

// Define your states, transitions and onEntry/onExit actions by passing a configuration object to createMachine
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
      onExit: (context, setContext) => {
        console.log("Exiting loading state");
        setContext({ count: context.count + 1 });
      },
    },
    success: {},
    error: {},
  },
  context: {
    count: 0,
  },
});

// Extract the send and subscribe functions from the machine
const { send, subscribe } = machine;

// Subscribe to state changes
// The callback function will be called whenever the state changes
const unsubscribe = machine.subscribe((state, context, error) => {
  console.log("Current state:", state);
  console.log("Current context:", context);
  if (error) {
    console.error("Error:", error);
  }
});

// Call unsubscribe to stop listening to state changes
unsubscribe();

// Trigger a transition by sending an event
send("FETCH");
```

## Usage with React

In a React application, you can create the `useMachine` hook to integrate the state machine with your components. Such hook can be found in the `sample-app` directory in [useMachine.ts](../sample-app/src/hooks/useMachine.ts)
