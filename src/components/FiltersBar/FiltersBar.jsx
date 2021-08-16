import { useState, useCallback, useEffect } from "react"
import { Button, Dropdown, Form, Row, Spinner } from "react-bootstrap"
import { connect } from "react-redux"
import remotive from "../../backend/backend"
import { fetchJobs } from "../../redux/actions/actions"

const mapStateToProps = state => state
const mapDispatchToProps = dispatch => ({
  getJobs: endpoint => dispatch(fetchJobs(endpoint)),
})

const FiltersBar = ({ getJobs }) => {
  const [categories, setCategories] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  const getCategories = useCallback(async () => {
    setIsLoading(true)
    const { data } = await remotive.get("/remote-jobs/categories")
    setCategories([{ name: "All", id: 0 }, ...data.jobs])
    setIsLoading(false)
  }, [])

  useEffect(() => {
    getCategories()
  }, [getCategories])

  return (
    <Row className="d-flex flex-column align-items-start justify-content-center py-4">
      {isLoading ? (
        <Spinner animation="border" variant="info" />
      ) : (
        <div
          className="d-flex w-100 align-items-end justify-content-between"
          // onSubmit={e => {
          //   e.preventDefault()
          //   getJobs(`/remote-jobs?search=${searchQuery}`)
          // }}
        >
          <Dropdown>
            <Dropdown.Toggle variant="outline-secondary">Categories</Dropdown.Toggle>

            <Dropdown.Menu>
              {categories.map(category => (
                <Dropdown.Item
                  key={category.id}
                  onSelect={() => {
                    if (category.name === "All") getJobs("/remote-jobs?limit=200")
                    else {
                      getJobs(`/remote-jobs?category=${category.name}`)
                    }
                  }}
                >
                  {category.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Form.Group className="d-flex m-0">
            <Form.Control
              type="text"
              placeholder="Search"
              className="mr-sm-2"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              onKeyDown={e => {
                if (e.key === "Enter") getJobs(`/remote-jobs?search=${searchQuery}`)
              }}
            />
            <Button
              variant="secondary"
              onClick={e => {
                getJobs(`/remote-jobs?search=${searchQuery}`)
              }}
            >
              Search
            </Button>
          </Form.Group>
        </div>
      )}
    </Row>
  )
}
export default connect(mapStateToProps, mapDispatchToProps)(FiltersBar)
