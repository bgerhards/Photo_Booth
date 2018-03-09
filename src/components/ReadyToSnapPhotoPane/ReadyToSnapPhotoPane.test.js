import React from "react";
import { shallow } from "enzyme";
import sinon from "sinon";
import ReadyToSnapPhotoPane from "./ReadyToSnapPhotoPane";
import Button from "../Button/Button";

it("renders without crashing", () => {
  shallow(<ReadyToSnapPhotoPane />);
});
