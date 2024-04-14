import createMachine from "../createMachine";
import { MachineConfig } from "../types";

interface Context {
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
    },
    paused: {
      on: {
        resume: "running",
      },
      onEntry: (context, setContext) => {
        setContext({ countStops: context.countStops + 1 });
      },
    },
  },
  context: { countStops: 0 },
};

describe("machine with subscription", () => {
  let machine = createMachine(config);

  beforeEach(() => {
    machine = createMachine(config);
  });

  it("should call the listener when an event is sent", () => {
    const listener = jest.fn();
    machine.subscribe(listener);

    machine.send("start");

    expect(listener).toHaveBeenCalledWith("running", { countStops: 0 });
  });

  it("should call the listener with the updated context", () => {
    const listener = jest.fn();
    machine.subscribe(listener);

    machine.send("start");
    machine.send("pause");

    expect(listener).toHaveBeenCalledWith("paused", { countStops: 1 });
  });

  it("should not call the listener after it has been unsubscribed", () => {
    const listener = jest.fn();
    const unsubscribe = machine.subscribe(listener);

    unsubscribe();

    machine.send("start");

    expect(listener).not.toHaveBeenCalled();
  });
});
