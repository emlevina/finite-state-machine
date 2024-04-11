import { Machine, MachineConfig, TransitionEvent } from "./types";

export default function createMachine(config: MachineConfig): Machine {
  const { states, initial } = config;
  let currentState = initial;

  const transitionToState = (event: TransitionEvent) => {
    const stateConfig = states[currentState];
    if (event in stateConfig.on) {
      stateConfig.onExit?.();
      currentState = stateConfig.on[event]!;
      states[currentState].onEntry?.();
    }
  };

  return {
    states,
    send: transitionToState,
  };
}
