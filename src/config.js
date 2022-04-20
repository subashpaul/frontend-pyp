import axios from "axios";

export const prodUrl='https://pypbackendserver.herokuapp.com'
export const localUrl='http://localhost:5050'
const baseApi=axios.create({
    baseURL:prodUrl
})
export default baseApi