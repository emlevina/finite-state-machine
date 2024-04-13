import { Listener, Machine, MachineConfig, TransitionEvent } from "./types";

export default function createMachine(config: MachineConfig): Machine {
  const { states, initial } = config;
  let currentState = initial;
  let listeners: Listener[] = [];

  const transitionToState = (event: TransitionEvent) => {
    const stateConfig = states[currentState];
    if (event in stateConfig.on) {
      stateConfig.onExit?.();
      currentState = stateConfig.on[event]!;
      states[currentState].onEntry?.();
      listeners.forEach((listener) => listener(currentState));
    }
  };

  return {
    states,
    initialState: initial,
    get currentState() {
      return currentState;
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
