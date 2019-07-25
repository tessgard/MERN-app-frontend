import NewFaq from "./NewFaq";
import React from "react";
import Enzyme, { shallow, render, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { createSerializer } from "enzyme-to-json";
import sinon from "sinon";

describe("<NewFaq />", () => {
  it("renders component", () => {
    const wrapper = shallow(<NewFaq />);
    expect(wrapper).toMatchSnapshot();
  });
});
