import { useState, useCallback, useEffect } from "react"
import { Button, Dropdown, Form, Row, Spinner } from "react-bootstrap"
import { useDispatch } from "react-redux"
import remotive from "../../backend/backend"
import { fetchJobs } from "../../redux/actions/actions"

const FiltersBar = () => {
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

  const dispatch = useDispatch()
  const getJobs = endpoint => dispatch(fetchJobs(endpoint))

  return (
    <Row className="d-flex flex-column align-items-start justify-content-center py-4">
      {isLoading ? (
        <Spinner animation="border" variant="info" />
      ) : (
        <div className="d-flex w-100 align-items-end justify-content-between">
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
export default FiltersBar
