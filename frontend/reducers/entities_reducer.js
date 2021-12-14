import { combineReducers } from "redux";

import users from "./users_reducer";
import listings from "./listings_reducer";
import saves from "./saves_reducer";

const entitiesReducer = combineReducers({
  users,
  listings,
  saves
});

export default entitiesReducer;