import { createMachine } from "kate-state";

enum LightSwitchStates {
  green = "green",
  yellow = "yellow",
  red = "red",
}

export enum LightSwitchEvents {
  SWITCH = "SWITCH",
}

export const lightSwitchMachine = createMachine({
  id: "lightSwitchMachine",
  initial: LightSwitchStates.green,
  states: {
    [LightSwitchStates.green]: {
      on: {
        [LightSwitchEvents.SWITCH]: LightSwitchStates.yellow,
      },
      onEntry: () => console.log("i am green now"),
      onExit: () => console.log("i am not green anymore"),
    },
    [LightSwitchStates.yellow]: {
      on: {
        [LightSwitchEvents.SWITCH]: LightSwitchStates.red,
      },
      onEntry: () => console.log("i am yellow now"),
      onExit: () => console.log("i am not yellow anymore"),
    },

    [LightSwitchStates.red]: {
      on: {
        [LightSwitchEvents.SWITCH]: LightSwitchStates.green,
      },
      onEntry: () => console.log("i am red now"),
      onExit: () => console.log("i am not red anymore"),
    },
  },
});
