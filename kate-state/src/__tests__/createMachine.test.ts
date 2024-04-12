import createMachine from "../createMachine";

const entryMockFn = jest.fn();
const exitMockFn = jest.fn();

const config = {
  initial: "idle",
  states: {
    idle: {
      on: {
        event1: "state1",
      },
    },
    state1: {
      on: {
        event2: "state2",
      },
      onExit: exitMockFn,
    },
    state2: {
      on: {
        event1: "state1",
      },
      onEntry: entryMockFn,
    },
  },
};

describe("createMachine", () => {
  let machine = createMachine(config);

  beforeEach(() => {
    machine = createMachine(config);
  });

  it("should initialize to 'idle' state", () => {
    expect(machine.currentState).toBe("idle");
  });

  it("should remain in 'idle' state when an invalid event is sent", () => {
    machine.send("event2");
    expect(machine.currentState).toBe("idle");
  });

  it("should transition from 'idle' to 'state1' when 'event1' is sent", () => {
    machine.send("event1");
    expect(machine.currentState).toBe("state1");
  });

  it("should call 'onExit' function when transitioning from 'idle' to 'state1'", () => {
    machine.send("event1");
    machine.send("event2");
    expect(exitMockFn).toHaveBeenCalled();
  });

  it("should call 'onEntry' function when transitioning to 'state1'", () => {
    machine.send("event1");
    machine.send("event2");
    expect(entryMockFn).toHaveBeenCalled();
  });

  it("should transition through 'idle', 'state1', 'state2', and back to 'state1' when 'event1', 'event2', and 'event1' are sent in sequence", () => {
    machine.send("event1");
    machine.send("event2");
    machine.send("event1");
    expect(machine.currentState).toBe("state1");
  });
});
