import Events from "./Events";
import React from "react";
import Enzyme, { shallow, render, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { createSerializer } from "enzyme-to-json";
import sinon from "sinon";

describe("<Events />", () => {
  it("renders component", () => {
    const wrapper = shallow(<Events />);
    expect(wrapper).toMatchSnapshot();
  });
});
