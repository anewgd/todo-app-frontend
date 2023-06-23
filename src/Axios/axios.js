import axios from "axios"
const instance = axios.create({
  baseURL:
    "http://mernbackend-env.eba-gqm2mhpr.us-east-1.elasticbeanstalk.com/api",
})
export default instance
//