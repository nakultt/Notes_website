import { useState } from "react";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {Registers} from "./services/auth";

export default function Register() {

  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [checkPassword, setCheckPassword] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if(password !== checkPassword) {
      setError("Password do not match")
      return
    }
    setLoading(true)
    try{
      await Registers(email,password)
      navigate("/login")
      
    } catch (err:unknown) {
      console.error(err)
      setError("Registration failed")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col items-center bg-neutral-800 border-3 border-yellow-800 rounded-[35px] m-9 p-7 h-103 w-79 ">
        <form className="items-center justify-center w-full" onSubmit={handleSubmit}>
          <h1 className="text-2xl mb-9 text-center">REGISTER</h1>
          
          <Input className="mb-4 bg-orange-200 text-black rounded-[13px]"
                 type="email"
                 placeholder="College Email"
                 value={email}
                 autoFocus
                 required
                 onChange={(e) => setEmail(e.target.value)}>
          </Input>

          <Input className="mb-4 bg-orange-200 text-black rounded-[13px]"
                 type="password"
                 placeholder="Password"
                 value={password}
                 required
                 onChange={(e) => setPassword(e.target.value)}>
          </Input>

          <Input className="mb-8 bg-orange-200 text-black rounded-[13px]"
                 type="password"
                 placeholder="Retype Password"
                 value={checkPassword}
                 required
                 onChange={(e) => setCheckPassword(e.target.value)}>
          </Input>

          <Button type="submit" 
                  className="moving-border-card p-5 w-full mb-5"
                  disabled={isLoading}
                  
                  >
            {isLoading ? "Registering..." : "Register"}
          </Button>
          
          <Link to="/register">Don't have an account? Click here</Link>

          {error && <p className="text-red-500 mt-3 text-center">{error}</p>}

        </form>
      </div>
    </div>
  )
} 