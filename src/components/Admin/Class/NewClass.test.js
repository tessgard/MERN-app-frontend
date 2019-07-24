import NewClass from "./NewClass";
import React from "react";
import Enzyme, { shallow, render, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { createSerializer } from "enzyme-to-json";
import sinon from "sinon";

describe("<NewClass />", () => {
  it("renders component", () => {
    const wrapper = shallow(<NewClass />);
    expect(wrapper).toMatchSnapshot();
  });
});
