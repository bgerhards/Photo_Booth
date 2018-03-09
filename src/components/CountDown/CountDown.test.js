import React from "react";
import { shallow } from "enzyme";
import CountDown from "./CountDown";

it("renders without crashing", () => {
  const mockSnapPhoto = jest.fn();

  jest.useFakeTimers()

  shallow(<CountDown timer={1} snapPhoto={mockSnapPhoto} />);

  jest.runAllTimers();
});

it("renders with timer greater than 1", () => {
  const mockSnapPhoto = jest.fn();

  jest.useFakeTimers()

  shallow(<CountDown timer={2} snapPhoto={mockSnapPhoto} />);

  jest.runAllTimers();
});


