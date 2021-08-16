import { useState } from "react"
import { Badge, Card, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import moment from "moment"

import "./JobCard.css"
import ToggleFavoriteIcon from "../ToggleFavoriteIcon/ToggleFavoriteIcon"

const JobCard = ({ job }) => {
  const [isShowingDesc, setIsShowingDesc] = useState(false)
  return (
    <Card className="JobCard my-1">
      <Card.Body>
        <div className="d-flex align-items-center">
          <ToggleFavoriteIcon job={job} />
          <Card.Title className="my-0 ml-2 mr-4">{job.title}</Card.Title>
          <Badge variant="info" className="my-auto">
            {job.category}
          </Badge>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <Card.Text className="m-0">
              <small>
                <i className="fas fa-calendar-day"></i> {moment(new Date(job.publication_date)).fromNow()}
              </small>
            </Card.Text>
            {job.job_type && (
              <Card.Text className="job-type m-0">
                <small>
                  <i className="far fa-clock"></i> {job.job_type}
                </small>
              </Card.Text>
            )}
            {job.candidate_required_location && (
              <Card.Text className="job-type m-0">
                <small>
                  <i className="fas fa-map-marked-alt"></i> {job.candidate_required_location}
                </small>
              </Card.Text>
            )}
            {job.salary && (
              <Card.Text className="m-0">
                <small>
                  <i className="fas fa-money-bill-wave"></i> {job.salary}
                </small>
              </Card.Text>
            )}
          </div>
          <div className="d-flex align-items-center">
            <ToggleFavoriteIcon companyName={job.company_name} />
            <Link to={`/companies/${job.company_name}`}>
              <Card.Subtitle className="m-0 ml-2 text-muted text-right">{job.company_name}</Card.Subtitle>
            </Link>
          </div>
        </div>
        <Button
          variant={isShowingDesc ? "warning" : "secondary"}
          size="sm"
          className="w-100 mt-2"
          onClick={() => setIsShowingDesc(!isShowingDesc)}
        >
          {isShowingDesc ? "Hide Description" : "Show Description"}
        </Button>
        {isShowingDesc && (
          <div className="d-flex flex-column justify-content-end">
            <Card.Text className="mt-2 mb-0">
              <small dangerouslySetInnerHTML={{ __html: job.description }}></small>
            </Card.Text>
            <Button
              variant={isShowingDesc ? "warning" : "secondary"}
              size="sm"
              className="mt-2"
              onClick={() => setIsShowingDesc(!isShowingDesc)}
            >
              {isShowingDesc ? "Hide Description" : "Show Description"}
            </Button>
          </div>
        )}
      </Card.Body>
    </Card>
  )
}
export default JobCard
