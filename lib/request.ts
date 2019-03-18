import axios, { AxiosPromise } from "axios"

const get = function(url: string): AxiosPromise {
  return axios.get(url)
}

export { get }
