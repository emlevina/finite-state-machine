import createMachine from "../createMachine";
import { MachineConfig } from "../types";

const entryMockFn = jest.fn();
const exitMockFn = jest.fn();

const config: MachineConfig<{}> = {
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
      onExit: exitMockFn,
    },
    paused: {
      on: {
        resume: "running",
      },
      onEntry: entryMockFn,
    },
  },
};

describe("machine", () => {
  let machine = createMachine(config);

  beforeEach(() => {
    machine = createMachine(config);
  });

  it("should initialize to 'idle' state", () => {
    expect(machine.currentState).toBe("idle");
  });

  it("should remain in 'idle' state when an invalid event is sent", () => {
    machine.send("pause");
    expect(machine.currentState).toBe("idle");
  });

  it("should transition from 'idle' to 'running' when 'start' event is sent", () => {
    machine.send("start");
    expect(machine.currentState).toBe("running");
  });

  it("should call 'onExit' function when transitioning from 'running' to 'paused'", () => {
    machine.send("start");
    machine.send("pause");
    expect(exitMockFn).toHaveBeenCalled();
  });

  it("should call 'onEntry' function when transitioning to 'paused'", () => {
    machine.send("start");
    machine.send("pause");
    expect(entryMockFn).toHaveBeenCalled();
  });

  it("should transition through 'idle', 'running', 'paused', and back to 'running' when 'start', 'pause', and 'resume' events are sent in sequence", () => {
    machine.send("start");
    machine.send("pause");
    machine.send("resume");
    expect(machine.currentState).toBe("running");
  });
});
