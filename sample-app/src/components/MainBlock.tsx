import { useEffect, useState } from "react";
import { useMachine } from "../hooks/useMachine";
import {
  FetchMachineEvents,
  FetchMachineStates,
  fetchMachine,
} from "../machines/fetchMachine";
import { useGetNumberQuery } from "../services/numberFact";
import Box from "../ui-components/Box";
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
    if (isLoading) {
      send(FetchMachineEvents.FETCH);
    }
  }, [isLoading]);

  useEffect(() => {
    if (factAboutNumber) {
      send(FetchMachineEvents.RESOLVE);
    }
  }, [factAboutNumber]);

  useEffect(() => {
    if (error) {
      send(FetchMachineEvents.REJECT);
    }
  }, [error]);

  return (
    <>
      <Box height={200}>
        {currentState === FetchMachineStates.idle && (
          <div>Are you thinking?</div>
        )}
        {currentState === FetchMachineStates.success && (
          <Fact number={userNumber} fact={factAboutNumber} />
        )}
        {currentState === FetchMachineStates.error && <div>Error</div>}
        {currentState === FetchMachineStates.loading && <div>Loading</div>}
      </Box>
      <NumberInput setUserNumber={setUserNumber} />
    </>
  );
}
