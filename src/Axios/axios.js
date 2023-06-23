import axios from "axios"
const instance = axios.create({
    baseURL:"http://todo-app-backend.eba-qqzuvyqz.us-east-1.elasticbeanstalk.com/api"
})
export default instance
