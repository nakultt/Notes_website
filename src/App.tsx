import { Button } from "./components/ui/button"
import {BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom"
import Sem1 from "./sems/sem1"
import Sem2 from "./sems/sem2"
import Sem3 from "./sems/sem3"
import Sem4 from "./sems/sem4"
import Sem5 from "./sems/sem5"
import Sem6 from "./sems/sem6"
import Sem7 from "./sems/sem7"
import Sem8 from "./sems/sem8"

function HomePage() {
  const navigate = useNavigate()

  const sem1 = () => {
    navigate('/sem1')
  }
  const sem2 = () => {
    navigate('/sem2')
  }
  const sem3 = () => {
    navigate('/sem3')
  }
  const sem4 = () => {
    navigate('/sem4')
  }
  const sem5 = () => {
    navigate('/sem5')
  }
  const sem6 = () => {
    navigate('/sem6')
  }
  const sem7 = () => {
    navigate('/sem7')
  }
  const sem8 = () => {
    navigate('/sem8')
  }

  const discord = () => {
    window.location.href = "https://discord.gg/TY8f2xAb"
  }

  const linkedin = () => {
    window.location.href = "https://www.linkedin.com/in/nakul-t-a222a7328 "
  }

  const instagram = () => {
    window.location.href = "https://www.instagram.com/nxkxlt"
  }
  
  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mt-10">SEM NOTES</h1>
        <div className="flex flex-col items-center justify-center bg-neutral-800 border-3 border-yellow-800 h-114 w-81 rounded-[35px] m-9 ">
          <div className="flex">
            <Button className="moving-border-card m-5 p-8" onClick={sem1}>
              SEM 1
            </Button>
            <Button className="moving-border-card m-5 p-8" onClick={sem2}>
              SEM 2
            </Button>
          </div>
          <div className="flex">
            <Button className="moving-border-card m-5 p-8" onClick={sem3}>
              SEM 3
            </Button>
            <Button className="moving-border-card m-5 p-8" onClick={sem4}>
              SEM 4
            </Button>
          </div>
          <div className="flex">
            <Button className="moving-border-card m-5 p-8" onClick={sem5}>
              SEM 5
            </Button>
            <Button className="moving-border-card m-5 p-8" onClick={sem6}>
              SEM 6
            </Button>
          </div>
          <div className="flex">
            <Button className="moving-border-card m-5 p-8" onClick={sem7}>
              SEM 7
            </Button>
            <Button className="moving-border-card m-5 p-8" onClick={sem8}>
              SEM 8
            </Button>
          </div>
        </div>
        <div className="flex flex-col m-3 mb-12 justify-center items-center mt-10">
          <h2 className="text-2xl font-bold m-3">Contact Developer</h2>
          <div className="flex flex-row">
            <Button className="bg-indigo-700 m-2 w-25 rounded-[15px] p-6 border-3 border-white" onClick={discord}>Discord</Button>
            <Button className="bg-blue-600 m-2 w-25 rounded-[15px] p-6 border-3 border-white" onClick={linkedin}>LinkedIn</Button>
            <Button className="bg-[#E1306C] m-2 w-25 rounded-[15px] p-6 border-3 border-white" onClick={instagram}>Instagram</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/sem1" element={<Sem1 />}></Route>
        <Route path="/sem2" element={<Sem2 />}></Route>
        <Route path="/sem3" element={<Sem3 />}></Route>
        <Route path="/sem4" element={<Sem4 />}></Route>
        <Route path="/sem5" element={<Sem5 />}></Route>
        <Route path="/sem6" element={<Sem6 />}></Route>
        <Route path="/sem7" element={<Sem7 />}></Route>
        <Route path="/sem8" element={<Sem8 />}></Route>
      </Routes>
    </Router>
  )
}

export default App