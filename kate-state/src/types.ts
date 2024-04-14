export type TransitionEvent = string;

interface StateConfig<T> {
  on?: {
    [event in TransitionEvent]?: string;
  };
  onEntry?: (context: T, setContext: (newContext: Partial<T>) => void) => void;
  onExit?: (context: T, setContext: (newContext: Partial<T>) => void) => void;
}

export interface MachineConfig<T extends object> {
  id?: string;
  initial: string;
  states: {
    [state: string]: StateConfig<T>;
  };
  context?: T;
}

export type Listener<T> = (
  currentState: string,
  context: T,
  error?: string
) => void;

export interface Machine<T extends object> {
  states: {
    [state: string]: StateConfig<T>;
  };
  send: (event: TransitionEvent) => void;
  initialState: string;
  initialContext: T;
  currentContext: T;
  currentState: string;
  subscribe: (listener: Listener<T>) => () => void;
}
