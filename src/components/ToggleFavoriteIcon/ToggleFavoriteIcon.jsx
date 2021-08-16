import { connect } from "react-redux"
import { addCompanyToFavorites, addJobToFavorites, removeCompanyFromFavorites, removeJobFromFavorites } from "../../redux/actions/actions"

import "./ToggleFavoriteIcon.css"

const mapStateToProps = state => state
const mapDispatchToProps = dispatch => ({
  addCompanyToFavorites: companyName => dispatch(addCompanyToFavorites(companyName)),
  removeCompanyFromFavorites: companyName => dispatch(removeCompanyFromFavorites(companyName)),
  addJobToFavorites: job => dispatch(addJobToFavorites(job)),
  removeJobFromFavorites: jobId => dispatch(removeJobFromFavorites(jobId)),
})

const ToggleFavoriteIcon = props => {
  return (
    <div className="ToggleFavoriteIcon">
      {(props.companyName && props.favorites.companies.includes(props.companyName)) ||
      (props.job && props.favorites.jobs.find(job => job.id === props.job.id)) ? (
        <i
          className="fas fa-star"
          onClick={e => {
            if (props.companyName) props.removeCompanyFromFavorites(props.companyName)
            else props.removeJobFromFavorites(props.job.id)
          }}
        ></i>
      ) : (
        <i
          className="far fa-star"
          onClick={e => {
            if (props.companyName) props.addCompanyToFavorites(props.companyName)
            else props.addJobToFavorites(props.job)
          }}
        ></i>
      )}
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(ToggleFavoriteIcon)
