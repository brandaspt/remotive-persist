import * as types from "../types/types"
import { initialState } from "../store"

const searchReducer = (state = initialState.search, action) => {
  switch (action.type) {
    case types.SET_SEARCH_JOBS:
      return { ...state, results: action.payload }

    case types.SET_SEARCH_LOADING:
      return { ...state, loading: action.payload }
    default:
      return state
  }
}

export default searchReducer
