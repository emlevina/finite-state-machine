import { createMachine } from "kate-state";

export enum FetchMachineStates {
  idle = "idle",
  loading = "loading",
  error = "error",
  success = "success",
}
export enum FetchMachineEvents {
  FETCH = "FETCH",
  RESOLVE = "RESOLVE",
  REJECT = "REJECT",
}

export const fetchMachine = createMachine({
  id: "fetchMachine",
  initial: FetchMachineStates.idle,
  states: {
    [FetchMachineStates.idle]: {
      on: {
        [FetchMachineEvents.FETCH]: FetchMachineStates.loading,
      },
    },
    [FetchMachineStates.loading]: {
      on: {
        [FetchMachineEvents.RESOLVE]: FetchMachineStates.success,
        [FetchMachineEvents.REJECT]: FetchMachineStates.error,
      },
    },

    [FetchMachineStates.success]: {
      on: {
        [FetchMachineEvents.FETCH]: FetchMachineStates.loading,
      },
    },
    [FetchMachineStates.error]: {
      on: {
        [FetchMachineEvents.FETCH]: FetchMachineStates.loading,
      },
    },
  },
});
