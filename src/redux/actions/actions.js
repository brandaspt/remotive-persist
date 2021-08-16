import remotive from "../../backend/backend"
import * as types from "../types/types"

export const addCompanyToFavorites = companyName => ({
  type: types.ADD_COMPANY_TO_FAVORITES,
  payload: companyName,
})

export const removeCompanyFromFavorites = companyName => ({
  type: types.REMOVE_COMPANY_FROM_FAVORITES,
  payload: companyName,
})

export const addJobToFavorites = job => ({
  type: types.ADD_JOB_TO_FAVORITES,
  payload: job,
})

export const removeJobFromFavorites = jobId => ({
  type: types.REMOVE_JOB_FROM_FAVORITES,
  payload: jobId,
})

export const fetchJobs = endpoint => {
  return async (dispatch, getState) => {
    dispatch({
      type: types.SET_SEARCH_LOADING,
      payload: true,
    })
    try {
      const { data } = await remotive.get(endpoint)
      dispatch({
        type: types.SET_SEARCH_JOBS,
        payload: data.jobs,
      })
      dispatch({
        type: types.SET_SEARCH_LOADING,
        payload: false,
      })
    } catch (error) {
      console.log(error)
      dispatch({
        type: types.SET_SEARCH_LOADING,
        payload: false,
      })
    }
  }
}
