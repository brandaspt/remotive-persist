import { createStore, combineReducers, compose, applyMiddleware } from "redux"
import thunk from "redux-thunk"

import favoritesReducer from "./reducers/favorites"
import searchReducer from "./reducers/search"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const initialState = {
  favorites: {
    companies: [],
    jobs: [],
  },
  search: {
    results: [],
    loading: false,
  },
}

const mainReducer = combineReducers({
  favorites: favoritesReducer,
  search: searchReducer,
})

const store = createStore(mainReducer, composeEnhancers(applyMiddleware(thunk)))

export default store
