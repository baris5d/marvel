import Card from "../../components/card";
import {shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallowToJson  } from 'enzyme-to-json';

import renderer from 'react-test-renderer';

configure({adapter: new Adapter()});

const initialProps = {
  src: "test.jpg",
  name: "test",
  id: "0"
};

const wrapper = shallow(<Card />);

describe("Card Component", () => {
  afterAll(() => wrapper.unmount());

  it("shouldn't render a card component without props", () => {
    expect(wrapper.type()).toBeNull();
  });

  it("should render a card if props present", () => {
    wrapper.setProps({ ...initialProps });

    expect(wrapper.find(".characterImage")).toHaveLength(1);
    expect(wrapper.find("Image").prop("src")).toBe(initialProps.src);
    expect(wrapper.find("Image").prop("alt")).toBe(initialProps.name);
    expect(wrapper.find("h2").prop("children")).toBe(initialProps.name);
  });

  it("renders correctly", () => {
        wrapper.setProps({ ...initialProps });
        wrapper.update()
        expect(shallowToJson(wrapper)).toMatchSnapshot();
  })
});