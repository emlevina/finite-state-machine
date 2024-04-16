# Finite State Machine by Ekaterina

This is a React TypeScript project demonstrating the use cases of finite state machines in frontend development. The project consists of two main parts: the `kate-state` library and a sample application.

## Description

The `kate-state` library is a custom implementation of a finite state machine. It's designed to be easy to use and integrate into any React TypeScript project.

The sample application is a practical example of how to use the `kate-state` library. It's linked to the library through its dependencies, providing a real-world context for the use of finite state machines.

## What is a Finite State Machine?

A finite state machine (FSM) is a mathematical model of computation used to design both computer programs and sequential logic circuits. It is conceived as an abstract machine that can be in one of a finite number of states. The machine is only in one state at a time; the state it is in at any given time is called the current state. It can change from one state to another when initiated by a triggering event or condition, this is called a transition.

In the context of this project, the `kate-state` library provides a way to manage state transitions in a predictable manner within a React application. This can help to simplify complex conditional UI logic, manage connectivity, handle initialization, and more.

## Structure

The project consists of two main parts:

- `kate-state`: The custom finite state machine library. See the [README](./kate-state/README.md) for installation and usage details.
- `sample-app`: A sample application demonstrating the library's usage. Refer to its [README](./sample-app/README.md) for setup instructions.

## Requirements Met

### Finite State Machine Library

The `kate-state` library is a custom implementation of a finite state machine. It's designed to be easy to use and integrate into any Javascript project. This library can be easily plugged out and used in other projects. More details on library can be found in the [README](./kate-state/README.md) in the `kate-state` folder.

### Use Case Application

The sample application, built with React and TypeScript, demonstrates the `kate-state` library usage. It interacts with a public API to fetch and display a fact about a number input by the user. The application showcases finite state machines in handling UI states, asynchronous data fetching, and theme toggling.

### API Integration

The application uses native fetch API for data fetching from [my own API](./server/README.md). The API is a simple Express server that returns a fact about a number input by the user. The server is hosted on vercel and can be accessed [here](https://finite-state-machine.vercel.app/api/facts/42).

### Testing

Unit tests (jest and react-testing-library) have been written for key parts of the application and the library, ensuring the reliability of the code.

### Mock Server Responses

The application includes client-side mock server responses implemented with Mock Service Worker, allowing the offline testing of the application.

### CI/CD Pipeline and Github Pages Deployment

The project includes a CI/CD pipeline implemented with GitHub Actions. This pipeline automatically runs tests and deploys the application to GitHub Pages whenever changes are pushed to the main branch. You can view the workflow file in the .github/workflows directory and the results of the workflow runs in the "Actions" tab of the GitHub repository.

A working demo can be accessed [here](https://emlevina.github.io/finite-state-machine/).

### Aesthetics

The application features a clean, user-friendly interface with a custom design implemented using SCSS modules. It offers both light and dark themes that users can switch between for their viewing comfort.
