import { createStore, combineReducers, compose, applyMiddleware } from "redux"
import thunk from "redux-thunk"

import favoritesReducer from "./reducers/favorites"
import searchReducer from "./reducers/search"

import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"
import { encryptTransform } from "redux-persist-transform-encrypt"

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

const persistConfig = {
  key: "root",
  storage,
  transforms: [
    encryptTransform({
      secretKey: process.env.REACT_APP_PERSIST_TRASNFORM_SECRET_KEY,
    }),
  ],
}

const mainReducer = combineReducers({
  favorites: favoritesReducer,
  search: searchReducer,
})

const persistedReducer = persistReducer(persistConfig, mainReducer)

const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(thunk)))
const persistor = persistStore(store)

export { store, persistor }
