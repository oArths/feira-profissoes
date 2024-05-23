import axios from 'axios'

export default axios.create({
    baseURL: 'https://presencesenai.eastus.cloudapp.azure.com/presence'
})