import Image from "../../utils/image";
import {shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallowToJson } from 'enzyme-to-json';

configure({adapter: new Adapter()});

const errorUrl = "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available/portrait_uncanny.jpg"

const wrapper = shallow(<Image />);

describe("Image Component", () => {
    afterAll(() => wrapper.unmount())

    it("should render a placeholder", () => {
        wrapper.find("img").prop("onError")()
        wrapper.update()

        expect(wrapper.find("img").prop("src")).toBe(errorUrl)

    })

    it("should render an image ", () => {
        const testProps = {
            src:"http://i.annihil.us/u/prod/marvel/i/mg/3/80/4c00358ec7548/portrait_uncanny.jpg",
            alt:"Abyss"
        }
        const wrapper = shallow(<Image {...testProps}/>)

        expect(wrapper.find("img").prop("src")).toBe(testProps.src);
        expect(wrapper.find("img").prop("alt")).toBe(testProps.alt);
    })

    it("renders correctly", () => {
        const testProps = {
            src:"http://i.annihil.us/u/prod/marvel/i/mg/3/80/4c00358ec7548/portrait_uncanny.jpg",
            alt:"Abyss"
        }

        const wrapper = shallow(<Image {...testProps}/>)
        expect(shallowToJson(wrapper)).toMatchSnapshot();
    })
})