import { Row, Spinner } from "react-bootstrap"

import JobCard from "../JobCard/JobCard"

const JobsGrid = ({ jobsList, isLoading }) => {
  return (
    <Row className="d-flex flex-column align-items-center justify-content-center py-4">
      {isLoading ? (
        <Spinner animation="border" variant="info" />
      ) : (
        <>
          <h3>{`Showing ${jobsList.length} ${jobsList.length > 1 ? "jobs" : "job"}!`}</h3>
          {jobsList.map(job => (
            <JobCard key={job.id} job={job} />
          ))}
        </>
      )}
    </Row>
  )
}

export default JobsGrid
