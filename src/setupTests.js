import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { createStore } from "redux";
import getPreloadedState from "./store/preloadedState";
import rootReducer from "./reducers";
import middlewares from "./store/middlewares";
import mockData from "./tests/mockData.json";

configure({ adapter: new Adapter() });

global.store = createStore(rootReducer, getPreloadedState(mockData), middlewares);
