import Goodbye from "./components/Goodbye";
import MainBlock from "./components/MainBlock";
import Welcome from "./components/Welcome";

import { useMachine } from "./hooks/useMachine";
import {
  UserFlowEvent,
  UserFlowState,
  userFlowMachine,
} from "./machines/userFlowMachine";

import Container from "./ui-components/Container";

export default function App() {
  const { send, currentState } = useMachine(userFlowMachine);

  return (
    <Container>
      {currentState === UserFlowState.welcome && (
        <Welcome
          transitionToFactInput={() => send(UserFlowEvent.START_CLICK)}
        />
      )}
      {currentState === UserFlowState.mainBlock && (
        <MainBlock transitionToGoodbye={() => send(UserFlowEvent.FINISH)} />
      )}
      {currentState === UserFlowState.goodbye && (
        <Goodbye transitionToWelcomeInput={() => send(UserFlowEvent.RESTART)} />
      )}
    </Container>
  );
}
