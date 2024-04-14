import { Listener, Machine, MachineConfig, TransitionEvent } from "./types";

export default function createMachine<T extends object>(
  config: MachineConfig<T>
): Machine<T> {
  const { states, initial, context = {} as T } = config;
  let currentState = initial;
  let currentContext = context;
  let listeners: Listener<T>[] = [];

  const setContext = (newContext: Partial<T>) => {
    currentContext = { ...currentContext, ...newContext };
  };

  const transitionToState = (event: TransitionEvent) => {
    const stateConfig = states[currentState];
    if (event in stateConfig.on) {
      stateConfig.onExit?.(currentContext, setContext);
      currentState = stateConfig.on[event]!;
      states[currentState].onEntry?.(currentContext, setContext);
      listeners.forEach((listener) => listener(currentState, currentContext));
    } else {
      const error = `Invalid event: ${event} for state: ${currentState}`;
      listeners.forEach((listener) =>
        listener(currentState, currentContext, error)
      );
    }
  };

  return {
    states,
    initialState: initial,
    initialContext: context,
    get currentState() {
      return currentState;
    },
    get currentContext() {
      return currentContext;
    },
    send: transitionToState,
    subscribe: (listener) => {
      listeners.push(listener);
      return () => {
        listeners = listeners.filter((l) => l !== listener);
      };
    },
  };
}
