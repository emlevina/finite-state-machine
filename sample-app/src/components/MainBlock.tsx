import { useState } from "react";
import { useMachine } from "../hooks/useMachine";
import {
  FetchMachineEvents,
  FetchMachineStates,
  fetchMachine,
} from "../machines/fetchMachine";
import { getNumberRapid } from "../services/numberFact";
import Box from "../ui-components/Box";
import Stack from "../ui-components/Stack";
import Fact from "./Fact";
import NumberInput from "./NumberInput";

export default function MainBlock() {
  const [factAboutNumber, setFactAboutNumber] = useState("");
  const [userNumber, setUserNumber] = useState("");
  const { send, currentState } = useMachine(fetchMachine);

  const handleAddNumber = (number: string) => {
    setUserNumber(number);
    send(FetchMachineEvents.FETCH);
    getNumberRapid(number)
      .then((fact) => {
        setFactAboutNumber(fact);
        send(FetchMachineEvents.RESOLVE);
      })
      .catch(() => {
        send(FetchMachineEvents.REJECT);
      });
  };

  return (
    <Stack alignItems={{ mobile: "stretch", tablet: "center" }} width={400}>
      <Box height={300}>
        {currentState === FetchMachineStates.idle && (
          <h5>
            Type a <em>number</em> to get a fact about it
          </h5>
        )}
        {currentState === FetchMachineStates.success && (
          <Fact number={userNumber} fact={factAboutNumber} />
        )}
        {currentState === FetchMachineStates.error && (
          <h5 style={{ color: "var(--text-color-error)" }}>
            Something went <em>wrong</em>
          </h5>
        )}
        {currentState === FetchMachineStates.loading && (
          <h5>
            Loading something <em>hilarious</em> (or not)
          </h5>
        )}
      </Box>
      <NumberInput
        handleAddNumber={handleAddNumber}
        currentState={currentState}
      />
    </Stack>
  );
}
