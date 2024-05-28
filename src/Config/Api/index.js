import axios from 'axios';

const cryptoHeaders = {
  'X-RapidAPI-Key': '0d2b37be8amsh23f100b0f3e97c0p147c8ejsnb7e89fa1ca66',
  'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

const axiosInstance = axios.create({
  baseURL: 'https://coinranking1.p.rapidapi.com',
  headers: cryptoHeaders

});

axiosInstance.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    return error
  },
)

export default axiosInstance

// https://rapidapi.com/Coinranking/api/coinranking1/