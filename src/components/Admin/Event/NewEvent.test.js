import NewEvent from "./NewEvent";
import React from "react";
import Enzyme, { shallow, render, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { createSerializer } from "enzyme-to-json";
import sinon from "sinon";

describe("<NewEvent />", () => {
  it("renders component", () => {
    const wrapper = shallow(<NewEvent />);
    expect(wrapper).toMatchSnapshot();
  });
});
