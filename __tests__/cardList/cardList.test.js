const data = [
    {
      "id": 1017100,
      "name": "A-Bomb (HAS)",
      "description": "Rick Jones has been Hulk's best bud since day one, but now he's more than a friend...he's a teammate! Transformed by a Gamma energy explosion, A-Bomb's thick, armored skin is just as strong and powerful as it is blue. And when he curls into action, he uses it like a giant bowling ball of destruction! ",
      "modified": "2013-09-18T15:54:04-0400",
      "thumbnail": {
        "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16",
        "extension": "jpg"
      },
      "resourceURI": "http://gateway.marvel.com/v1/public/characters/1017100",
      "comics": {
        "available": 3,
        "collectionURI": "http://gateway.marvel.com/v1/public/characters/1017100/comics",
        "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/40632",
            "name": "Hulk (2008) #53"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/40630",
            "name": "Hulk (2008) #54"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/40628",
            "name": "Hulk (2008) #55"
          }
        ],
        "returned": 3
      },
      "series": {
        "available": 2,
        "collectionURI": "http://gateway.marvel.com/v1/public/characters/1017100/series",
        "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/17765",
            "name": "FREE COMIC BOOK DAY 2013 1 (2013)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/3374",
            "name": "Hulk (2008 - 2012)"
          }
        ],
        "returned": 2
      },
      "stories": {
        "available": 7,
        "collectionURI": "http://gateway.marvel.com/v1/public/characters/1017100/stories",
        "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/92078",
            "name": "Hulk (2008) #55",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/92079",
            "name": "Interior #92079",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/92082",
            "name": "Hulk (2008) #54",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/92083",
            "name": "Interior #92083",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/92086",
            "name": "Hulk (2008) #53",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/92087",
            "name": "Interior #92087",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/105929",
            "name": "cover from Free Comic Book Day 2013 (Avengers/Hulk) (2013) #1",
            "type": "cover"
          }
        ],
        "returned": 7
      },
      "events": {
        "available": 0,
        "collectionURI": "http://gateway.marvel.com/v1/public/characters/1017100/events",
        "items": [],
        "returned": 0
      },
      "urls": [
        {
          "type": "detail",
          "url": "http://marvel.com/characters/76/a-bomb?utm_campaign=apiRef&utm_source=8b746231b5aabd7c3179aeae74cde161"
        },
        {
          "type": "comiclink",
          "url": "http://marvel.com/comics/characters/1017100/a-bomb_has?utm_campaign=apiRef&utm_source=8b746231b5aabd7c3179aeae74cde161"
        }
      ]
    }
]

import CardList from "../../components/cardList";
import {shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallowToJson } from 'enzyme-to-json';


configure({adapter: new Adapter()});


const wrapper = shallow(<CardList />)
describe("CardList Component", () => {
  afterAll(() => wrapper.unmount())
  
  it("renders correctly", () => {
        wrapper.setProps({ data: data })
        wrapper.update()
        expect(shallowToJson(wrapper)).toMatchSnapshot();
  })
});