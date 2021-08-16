import { Container } from "react-bootstrap"
import { connect } from "react-redux"

import JobsGrid from "../components/JobsGrid/JobsGrid"

const mapStateToProps = state => state

const FavoriteJobs = ({ favorites }) => {
  return (
    <Container>
      <h3 className="text-center my-4">Favorite Jobs</h3>
      <JobsGrid jobsList={favorites.jobs} />
    </Container>
  )
}

export default connect(mapStateToProps)(FavoriteJobs)
