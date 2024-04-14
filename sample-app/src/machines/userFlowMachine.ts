import { createMachine } from "kate-state";

export enum UserFlowEvent {
  START_CLICK = "START_CLICK",
  FINISH = "FINISH",
  RESTART = "RESTART",
}

export enum UserFlowState {
  welcome = "welcome",
  mainBlock = "mainBlock",
  goodbye = "goodbye",
}

export const userFlowMachine = createMachine({
  id: "userFlowMachine",
  initial: "welcome",
  states: {
    [UserFlowState.welcome]: {
      on: {
        [UserFlowEvent.START_CLICK]: UserFlowState.mainBlock,
      },
    },
    [UserFlowState.mainBlock]: {
      on: {
        [UserFlowEvent.FINISH]: UserFlowState.goodbye,
      },
    },
    [UserFlowState.goodbye]: {
      on: {
        [UserFlowEvent.RESTART]: UserFlowState.welcome,
      },
    },
  },
});
