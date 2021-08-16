import { useState, useEffect, useCallback } from "react"
import { withRouter } from "react-router-dom"
import remotive from "../../backend/backend"
import JobsGrid from "../JobsGrid/JobsGrid"

const CompanyDetails = ({ match }) => {
  const [jobsList, setJobsList] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const getCompanyDetails = useCallback(async () => {
    setIsLoading(true)
    const { data } = await remotive.get(`/remote-jobs?company_name=${match.params.company_name}`)
    setJobsList(data.jobs)
    setIsLoading(false)
  }, [match.params.company_name])

  useEffect(() => {
    getCompanyDetails()
  }, [getCompanyDetails])

  return (
    <>
      <h2 className="text-center text-muted my-1">Company: {match.params.company_name}</h2>
      <JobsGrid jobsList={jobsList} isLoading={isLoading} />
    </>
  )
}

export default withRouter(CompanyDetails)
