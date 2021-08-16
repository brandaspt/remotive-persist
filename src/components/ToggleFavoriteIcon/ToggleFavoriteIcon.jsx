import { useDispatch, useSelector } from "react-redux"
import { addCompanyToFavorites, addJobToFavorites, removeCompanyFromFavorites, removeJobFromFavorites } from "../../redux/actions/actions"

import "./ToggleFavoriteIcon.css"

const ToggleFavoriteIcon = props => {
  const reduxState = useSelector(state => state)
  const dispatch = useDispatch()
  const addCompanyToFavs = companyName => dispatch(addCompanyToFavorites(companyName))
  const removeCompanyFromFavs = companyName => dispatch(removeCompanyFromFavorites(companyName))
  const addJobToFavs = job => dispatch(addJobToFavorites(job))
  const removeJobFromFavs = jobId => dispatch(removeJobFromFavorites(jobId))

  return (
    <div className="ToggleFavoriteIcon">
      {(props.companyName && reduxState.favorites.companies.includes(props.companyName)) ||
      (props.job && reduxState.favorites.jobs.find(job => job.id === props.job.id)) ? (
        <i
          className="fas fa-star"
          onClick={e => {
            if (props.companyName) removeCompanyFromFavs(props.companyName)
            else removeJobFromFavs(props.job.id)
          }}
        ></i>
      ) : (
        <i
          className="far fa-star"
          onClick={e => {
            if (props.companyName) addCompanyToFavs(props.companyName)
            else addJobToFavs(props.job)
          }}
        ></i>
      )}
    </div>
  )
}

export default ToggleFavoriteIcon
