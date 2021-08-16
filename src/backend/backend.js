import axios from "axios"

const remotive = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
})

export default remotive
