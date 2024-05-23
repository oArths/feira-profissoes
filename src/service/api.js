import axios from 'axios'

export default axios.create({
    baseURL: 'http://presencesenai.eastus.cloudapp.azure.com:8080/presence'
})