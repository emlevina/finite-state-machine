import { Machine } from "kate-state/dist/types";
import { useEffect, useState } from "react";

export const useMachine = (machine: Machine) => {
  const { subscribe, send, initialState } = machine;
  const [currentState, setCurrentState] = useState(initialState);

  useEffect(() => {
    const unsubscribe = subscribe((newState) => setCurrentState(newState));

    return () => {
      unsubscribe();
    };
  });

  return {
    send,
    currentState,
  };
};
