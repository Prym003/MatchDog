import React from "react";
import { Link } from "react-router-dom";
import { configure, shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import '@testing-library/jest-dom';

import Nav from "../src/components/Nav/Nav";

configure({ adapter: new Adapter() });

describe("<Nav />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Nav />);
  });
  it("Deberia renderizar 3 <Link />", () => {
    expect(wrapper.find(Link)).toHaveLength(3);
  });
  it('El primer Link debe cambiar la ruta hacia "/"', () => {
    expect(wrapper.find(Link).at(0).prop("to")).toEqual("/");
  });
  it('El segundo Link debe tener el texto "Add Todo" y cambiar la ruta hacia "/Home"', () => {
    expect(wrapper.find(Link).at(1).prop("to")).toEqual("/Home");
    expect(wrapper.find(Link).at(1).text()).toEqual("Home");
  });
  it('El tercer Link debe tener el texto "Create New Breed" y cambiar la ruta hacia "/CreateDog"', () => {
    expect(wrapper.find(Link).at(2).prop("to")).toEqual("/CreateDog");
    expect(wrapper.find(Link).at(2).text()).toEqual("Create New Breed");
  });
});
