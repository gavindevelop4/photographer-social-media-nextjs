import axios from 'axios'

const service = axios.create({
  baseURL: "http://localhost:3000/api",
  headers: { 'Content-Type': 'application/json' },
  timeout: 60000 // request timeout
})

export default service;