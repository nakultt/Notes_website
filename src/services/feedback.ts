import axios from "axios"

const API_URL = "https://notes-backend-t6y3.onrender.com";

export const getFeedback = async () => {
  const token = localStorage.getItem("token");
  const response = await axios.get(
    `${API_URL}/api/feedback`,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  )
  return response.data
}

export const postLike = async () => {
  const token = localStorage.getItem("token");
  const response = await axios.post(
    `${API_URL}/api/feedback/like`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  )

  return response.data  
}

export const postDislike = async () => {
  const token = localStorage.getItem("token");
  const response = await axios.post(
    `${API_URL}/api/feedback/dislike`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  )

  return response.data  
}