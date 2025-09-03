import { useState } from "react";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Logins from "../services/auth"

export default function Login() {

  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try{
      const data = Logins(email,password)
      if (localStorage.getItem("token")){
        navigate("/")
      }
    } catch (err:any) {
      console.error(err)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col items-center bg-neutral-800 border-3 border-yellow-800 rounded-[35px] m-9 p-7 h-86 w-79 ">
        <form className="items-center justify-center w-full">
          <h1 className="text-2xl mb-9 text-center">LOGIN</h1>

          <Input className="mb-4 bg-orange-200 text-black rounded-[13px]"
                 type="email"
                 placeholder="College Email"
                 value={email}
                 autoFocus
                 required
                 onChange={(e) => setEmail(e.target.value)}>
          </Input>

          <Input className="mb-8 bg-orange-200 text-black rounded-[13px]"
                 type="password"
                 placeholder="Password"
                 value={password}
                 required
                 onChange={(e) => setPassword(e.target.value)}>
          </Input>

          <Button className="moving-border-card p-5 w-full mb-5"
                  onClick={handleSubmit}>
            Login
          </Button>
          
          <Link to="/register">Don't have an account? Click here</Link>
        </form>
      </div>
    </div>
  )
} 