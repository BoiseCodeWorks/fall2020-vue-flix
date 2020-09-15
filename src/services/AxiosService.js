import Axios from "axios";

export const api = Axios.create({
  baseURL: "https://api.themoviedb.org/3/search/movie",
  timeout: 3000
})


export const sandbox = Axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api",
  timeout: 3000
})