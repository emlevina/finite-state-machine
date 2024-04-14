import createMachine from "../createMachine";
import { MachineConfig } from "../types";

interface Context {
  currentSong: string;
  countStops: number;
}

const config: MachineConfig<Context> = {
  initial: "idle",
  states: {
    idle: {
      on: {
        start: "running",
      },
    },
    running: {
      on: {
        pause: "paused",
      },
      onEntry: (context, setContext) => {
        const SONGS = [
          "Radioactive",
          "Demons",
          "Believer",
          "Thunder",
          "It's Time",
        ];
        setContext({ currentSong: SONGS[context.countStops] });
      },
      onExit: (context, setContext) => {
        setContext({ countStops: context.countStops + 1 });
      },
    },
    paused: {
      on: {
        resume: "running",
      },
    },
  },
  context: { currentSong: "", countStops: 0 },
};

describe("machine's context", () => {
  let machine = createMachine(config);

  beforeEach(() => {
    machine = createMachine(config);
  });

  it("'countStops' should be updated when 'onExit' is called", () => {
    expect(machine.currentContext.countStops).toEqual(0);

    machine.send("start");
    machine.send("pause");
    expect(machine.currentContext.countStops).toEqual(1);
  });

  it("'currentSong' should be updated when 'onEntry' is called", () => {
    expect(machine.currentContext.currentSong).toEqual("");

    machine.send("start");
    expect(machine.currentContext.currentSong).toEqual("Radioactive");
  });

  it("should be updated to { currentSong: 'Believer', countStops: 2} after a given sequence of transitions", () => {
    machine.send("start"); // currentSong: "Radioactive", countStops: 0
    machine.send("pause"); // currentSong: "Radioactive", countStops: 1
    machine.send("resume"); // currentSong: "Demons", countStops: 1
    machine.send("pause"); // currentSong: "Demons", countStops: 2
    machine.send("resume"); // currentSong: "Believer", countStops: 2
    expect(machine.currentContext).toEqual({
      currentSong: "Believer",
      countStops: 2,
    });
  });
});
