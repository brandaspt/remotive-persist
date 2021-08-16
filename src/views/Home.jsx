import { useEffect } from "react"
import { connect } from "react-redux"
import { Container } from "react-bootstrap"

import FiltersBar from "../components/FiltersBar/FiltersBar"
import JobsGrid from "../components/JobsGrid/JobsGrid"
import { fetchJobs } from "../redux/actions/actions"

const mapStateToProps = state => state
const mapDispatchToProps = dispatch => ({
  getJobs: endpoint => dispatch(fetchJobs(endpoint)),
})

const Home = ({ search, getJobs }) => {
  useEffect(() => {
    getJobs("/remote-jobs?limit=200")
  }, [getJobs])

  return (
    <Container>
      <FiltersBar />
      <JobsGrid jobsList={search.results} isLoading={search.loading} />
    </Container>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
