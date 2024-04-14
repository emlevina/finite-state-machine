import { Machine } from "kate-state/dist/types";
import { useEffect, useState } from "react";

export const useMachine = <T extends object>(machine: Machine<T>) => {
  const { subscribe, send, initialState, initialContext } = machine;
  const [currentState, setCurrentState] = useState(initialState);
  const [currentContext, setCurrentContext] = useState(initialContext);

  useEffect(() => {
    const unsubscribe = subscribe((newState, newContext) => {
      setCurrentState(newState);
      setCurrentContext(newContext);
    });

    return () => {
      unsubscribe();
    };
  });

  return {
    send,
    currentState,
    currentContext,
  };
};
