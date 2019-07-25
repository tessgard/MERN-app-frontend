import OurStory from "./OurStory";
import React from "react";
import Enzyme, { shallow, render, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { createSerializer } from "enzyme-to-json";
import sinon from "sinon";

describe("<OurStory />", () => {
  it("renders component", () => {
    const wrapper = shallow(<OurStory />);
    expect(wrapper).toMatchSnapshot();
  });
});