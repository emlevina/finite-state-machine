import { useState } from "react";
import Fact from "./components/Fact";
import FactInput from "./components/FactInput";
import { FetchMachineEvents, fetchMachine } from "./machines/fetchMachine";
import Button from "./ui-components/Button";
import Container from "./ui-components/Container";

export default function App() {
  const [userNumber, setUserNumber] = useState("");
  const { send, currentState } = fetchMachine;
  console.log(process.env.REACT_APP_RAPID_API_KEY);

  return (
    <Container>
      <div style={{ display: "flex", gap: 20 }}>
        <FactInput setUserNumber={setUserNumber} />
        {currentState === "success" && <Fact number={userNumber} />}
        {currentState === "idle" && <div>Empty</div>}
        <Button
          handleClick={() => send(FetchMachineEvents.FETCH)}
          text="I am a smaller button fetching data"
          variant="contained"
        />
      </div>
    </Container>
  );
}
