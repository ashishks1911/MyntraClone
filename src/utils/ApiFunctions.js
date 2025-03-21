import axios from 'axios'

export async function fetchCityAndDistrict(pincode) {
  const response  = await axios.get(`https://api.postalpincode.in/pincode/${pincode}`)
  console.log(response.data);

}