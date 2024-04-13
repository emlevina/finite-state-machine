import { useEffect, useState } from "react";

import MainBlock from "./components/MainBlock";
import Welcome from "./components/Welcome";

import {
  UserFlowEvent,
  UserFlowState,
  userFlowMachine,
} from "./machines/userFlowMachine";

import Container from "./ui-components/Container";
import Stack from "./ui-components/Stack";

export default function App() {
  const { subscribe, send, initialState } = userFlowMachine;
  const [currentState, setCurrentState] = useState(initialState);

  useEffect(() => {
    const unsubscribe = subscribe((newState) => setCurrentState(newState));

    return () => {
      unsubscribe();
    };
  }, [userFlowMachine]);

  return (
    <Container>
      <Stack gap={2}>
        {currentState === UserFlowState.welcome && (
          <Welcome
            transitionToFactInput={() => send(UserFlowEvent.START_CLICK)}
          />
        )}
        {currentState === UserFlowState.mainBlock && <MainBlock />}
      </Stack>
    </Container>
  );
}
