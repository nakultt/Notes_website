import axios from "axios"

const API_URL="http://localhost:5173"

const Logins = async (email:string , password: string) => {
  const response = await axios.post(
    `${API_URL}/auth/login`,
    {email, password},
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
  localStorage.setItem("token", response.data.token)
  localStorage.setItem("email", response.data.email)

  return response.data
}

const Registers = async (email: string, password: string) => {
  const response = await axios.post(
    `${API_URL}/auth/register`,
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