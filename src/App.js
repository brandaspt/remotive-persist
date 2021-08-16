import { Route } from "react-router-dom"

import TopBar from "./components/TopBar/TopBar"
import Home from "./views/Home"

import "./App.css"
import Company from "./views/Company"
import FavoriteCompanies from "./views/FavoriteCompanies"
import FavoriteJobs from "./views/FavoriteJobs"

const App = () => {
  return (
    <div className="App">
      <TopBar />
      <Route exact path="/" component={Home} />
      <Route exact path="/favoriteCompanies" component={FavoriteCompanies} />
      <Route exact path="/favoriteJobs" component={FavoriteJobs} />
      <Route path="/companies/:company_name" component={Company} />
    </div>
  )
}

export default App
