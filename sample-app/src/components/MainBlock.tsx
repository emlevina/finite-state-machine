import { useState } from "react";
import Fact from "./Fact";
import FactInput from "./FactInput";

export default function MainBlock() {
  const [userNumber, setUserNumber] = useState("");
  return (
    <>
      <FactInput setUserNumber={setUserNumber} />
      {userNumber && <Fact number={userNumber} />}
      {/* TODO: Add empty component and thinking */}
      {/* <div>Empty</div> */}
    </>
  );
}
