import { Machine } from "kate-state/dist/types";
import { useEffect, useState } from "react";

export const useMachine = <T extends object>(machine: Machine<T>) => {
  const { subscribe, send, initialState, initialContext } = machine;
  const [currentState, setCurrentState] = useState(initialState);
  const [currentContext, setCurrentContext] = useState(initialContext);
  const [error, setError] = useState("");

  useEffect(() => {
    const unsubscribe = subscribe((newState, newContext, error) => {
      setCurrentState(newState);
      setCurrentContext(newContext);
      if (error) {
        setError(error);
      }
    });

    return () => {
      unsubscribe();
    };
  });

  return {
    send,
    currentState,
    currentContext,
    error
  };
};
