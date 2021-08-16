import { Link } from "react-router-dom"
import ToggleFavoriteIcon from "../ToggleFavoriteIcon/ToggleFavoriteIcon"

import "./FavoriteItem.css"

const FavoriteItem = ({ companyName }) => {
  return (
    <div className="FavoriteItem text-center d-flex align-items-center justify-content-center m-3">
      <ToggleFavoriteIcon companyName={companyName} />
      <Link to={`/companies/${companyName}`}>
        <h2>{companyName}</h2>
      </Link>
    </div>
  )
}

export default FavoriteItem
