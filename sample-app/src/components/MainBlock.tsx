import { useEffect, useState } from "react";
import { useMachine } from "../hooks/useMachine";
import {
  FetchMachineEvents,
  FetchMachineStates,
  fetchMachine,
} from "../machines/fetchMachine";
import { useGetNumberQuery } from "../services/numberFact";
import Box from "../ui-components/Box";
import Stack from "../ui-components/Stack";
import Fact from "./Fact";
import NumberInput from "./NumberInput";

export default function MainBlock() {
  const [userNumber, setUserNumber] = useState("");
  const { send, currentState } = useMachine(fetchMachine);
  const {
    data: factAboutNumber,
    error,
    isLoading,
  } = useGetNumberQuery(userNumber, { skip: !userNumber });

  useEffect(() => {
    if (userNumber && currentState === FetchMachineStates.error) {
      send(FetchMachineEvents.RETRY);
    } else if (userNumber) {
      send(FetchMachineEvents.FETCH);
    }
  }, [userNumber]);

  useEffect(() => {
    if (
      factAboutNumber &&
      currentState === FetchMachineStates.loading &&
      !isLoading
    ) {
      new Promise((resolve) => setTimeout(resolve, 5000)).then(() =>
        send(FetchMachineEvents.RESOLVE)
      );
    }
  }, [factAboutNumber, currentState, isLoading]);

  useEffect(() => {
    if (error) {
      send(FetchMachineEvents.REJECT);
    }
  }, [error]);

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
      <NumberInput setUserNumber={setUserNumber} currentState={currentState} />
    </Stack>
  );
}
