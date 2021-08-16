import { connect } from "react-redux"
import { withRouter } from "react-router-dom"

import "./FavoritesIndicator.css"

const mapStateToProps = state => state

const FavoritesIndicator = ({ type, list, history }) => {
  return (
    <div
      className="FavoritesIndicator d-flex align-items-center justify-content-center p-2 mx-2"
      onClick={e => {
        if (type === "companies") history.push("/favoriteCompanies")
        else history.push("/favoriteJobs")
      }}
    >
      <p className="m-0">{`Favorite ${type}`}</p>
      <div className="num-of-favs d-flex align-items-center justify-content-center">{list.length}</div>
    </div>
  )
}

export default connect(mapStateToProps)(withRouter(FavoritesIndicator))
