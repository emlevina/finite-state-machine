import Button from "./components/Button";
import { FetchMachineEvents, fetchMachine } from "./machines/fetchMachine";
import {
  LightSwitchEvents,
  lightSwitchMachine,
} from "./machines/lightSwitchMachine";
import { useGetNumberQuery } from "./services/number";

export default function App() {
  const { send } = lightSwitchMachine;
  const { send: sendFetch } = fetchMachine;
  const { data } = useGetNumberQuery("42");
  console.log(data);
  return (
    <div className="app">
      <Button
        handleClick={() => send(LightSwitchEvents.SWITCH)}
        text="I am a big nice button switching colors in console"
      />
      <Button
        handleClick={() => sendFetch(FetchMachineEvents.FETCH)}
        text="I am a smaller button fetching data"
      />
    </div>
  );
}
