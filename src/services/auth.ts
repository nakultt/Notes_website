import axios from "axios"

const API_URL="http://localhost:5173"

const Logins = async (email:string , password: string) => {
  const response = await axios.post(
    `${API_URL}/login`,
    {email, password},
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
  localStorage.setItem("token", response.data.token)
  localStorage.setItem("email", email)

  return response.data
}

const Registers = async (email: string, password: string) => {
  const response = await axios.post(
    `${API_URL}/register`,
    {email, password},
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  )

  return response.data
}

export {Logins}
export {Registers}