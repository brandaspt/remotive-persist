import { Container } from "react-bootstrap"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"

import FavoritesIndicator from "../FavoritesIndicator/FavoritesIndicator"

import "./TopBar.css"

const TopBar = () => {
  const favorites = useSelector(state => state.favorites)
  return (
    <div id="fixed-compensator">
      <Container fluid className="TopBar d-flex align-items-center">
        <Link to="/remotive-persist" className="mr-auto">
          <h1 className="py-1 text-center m-0">Remotive Strive</h1>
        </Link>
        <FavoritesIndicator type="companies" list={favorites.companies} />
        <FavoritesIndicator type="jobs" list={favorites.jobs} />
      </Container>
    </div>
  )
}

export default TopBar
