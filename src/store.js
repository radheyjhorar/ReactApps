import { createStore } from "redux";
import rootReducer from "./services/reducers/Index";

const store = createStore(rootReducer);

export default store;