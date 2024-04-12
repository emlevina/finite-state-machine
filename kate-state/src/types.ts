export type TransitionEvent = string;

interface StateConfig {
  on: {
    [event in TransitionEvent]?: string;
  };
  onEntry?: () => void;
  onExit?: () => void;
}

export interface MachineConfig {
  id?: string;
  initial: string;
  states: {
    [state: string]: StateConfig;
  };
}

export interface Machine {
  states: {
    [state: string]: StateConfig;
  };
  send: (event: TransitionEvent) => void;
  currentState: string;
}
