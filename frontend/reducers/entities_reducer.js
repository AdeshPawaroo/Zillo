import { combineReducers } from "redux";

import users from "./users_reducer";
import listings from "./listings_reducer";

const entitiesReducer = combineReducers({
  users,
  listings
});

export default entitiesReducer;