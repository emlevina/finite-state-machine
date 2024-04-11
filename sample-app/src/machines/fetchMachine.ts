import { createMachine } from "kate-state";

enum FetchMachineStates {
  idle = "idle",
  loading = "loading",
  error = "error",
  success = "success",
}
export enum FetchMachineEvents {
  FETCH = "FETCH",
  RESOLVE = "RESOLVE",
  REJECT = "REJECT",
  RETRY = "RETRY",
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
      onEntry: () => {
        fetch("https://jsonplaceholder.typicode.com/todos/1")
          .then((response) => {
            if (!response.ok) {
              throw new Error("Error");
            }
            return response.json();
          })
          .then((data) => {
            console.log(data);
            fetchMachine.send(FetchMachineEvents.RESOLVE);
          })
          .catch(() => fetchMachine.send(FetchMachineEvents.REJECT));
      },
    },

    [FetchMachineStates.success]: {
      on: {
        [FetchMachineEvents.FETCH]: FetchMachineStates.loading,
      },
      onEntry: () => {
        console.log("success");
      },
    },
    [FetchMachineStates.error]: {
      on: {
        [FetchMachineEvents.RETRY]: FetchMachineStates.loading,
      },
    },
  },
});
