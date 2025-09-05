import { Analytics } from "@vercel/analytics/react"
import { Button } from "./components/ui/button"
import { useState, useEffect } from "react"
import {BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom"
import { ThumbsUp, ThumbsDown } from "lucide-react"
import Sem1 from "./semesters/sem1"
import Sem2 from "./semesters/sem2"
import Sem3 from "./semesters/sem3"
import Sem4 from "./semesters/sem4"
import Sem5 from "./semesters/sem5"
import Sem6 from "./semesters/sem6"
import Sem7 from "./semesters/sem7"
import Sem8 from "./semesters/sem8"
import Login from "./pages/login_page"
import Register from "./pages/register_page";
import { getFeedback, postLike, postDislike } from "./services/feedback"


function HomePage() {
  const navigate = useNavigate();

  const [isHovered, setIsHovered] = useState(false)
  const [likes, setLikes] = useState(0)
  const [dislikes, setDislikes] = useState(0);
  const [userVote, setUserVote] = useState<string | null>(null)

  const sem1 = () => {
    navigate('/sem1');
  }
  const sem2 = () => {
    navigate('/sem2');
  }
  const sem3 = () => {
    navigate('/sem3');
  }
  const sem4 = () => {
    navigate('/sem4');
  }
  const sem5 = () => {
    navigate('/sem5');
  }
  const sem6 = () => {
    navigate('/sem6');
  }
  const sem7 = () => {
    navigate('/sem7');
  }
  const sem8 = () => {
    navigate('/sem8');
  }

  const login = () => {
    navigate('/login')
  }
  const logout = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("email")
    navigate('/')
  }

  const discord = () => {
    window.open("https://discord.gg/TY8f2xAb");
  }
  const linkedin = () => {
    window.open("https://www.linkedin.com/in/nakul-t-a222a7328 ");
  }
  const instagram = () => {
    window.open("https://www.instagram.com/nxkxlt");
  }

  useEffect(() => {
    const fetchFeedback = async () => {
      try {
        const data = await getFeedback();
        setLikes(data.likes)
        setDislikes(data.dislikes)
        setUserVote(data.userVote)
      } catch (error) {
        console.error("Failed to fetch feedback:", error)
      }
    }
    fetchFeedback()
  }, [])

  const handleLike = async () => {
    if (!loggedIn) {
      alert("Login to Vote")
      return
    }
    if (userVote === "like") {
      return
    }

    try{
      await postLike()
      const data = await getFeedback()
      setLikes(data.likes)
      setDislikes(data.dislikes)
      setUserVote(data.userVote)
    } catch (error){
      console.error("Failed to like:",error)
    }
  }

  const handleDislike = async () => {
    if (!loggedIn) {
      alert("Login to Vote")
      return
    }
    if (userVote === "dislike") {
      return 
    }

    try{
      await postDislike()
      const data = await getFeedback()
      setLikes(data.likes)
      setDislikes(data.dislikes)
      setUserVote(data.userVote)
    } catch (error){
      console.error("Failed to dislike:",error)
    }
  }
  
  const loggedIn = !!localStorage.getItem("token")
  
  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <div className="self-end" 
             onMouseEnter={() => setIsHovered(true)} 
             onMouseLeave={() => setIsHovered(false)}>

          <Button className="bg-[#da8300]  mt-[15px] w-40"
                  onClick={loggedIn ? undefined : login} >
            {loggedIn ? "Logged in" : "Login"} 
          </Button>

          <div className="absolute w-full h-3"></div>

          {isHovered && loggedIn && ( 
            <div className="absolute w-40 right-0 mt-3 flex flex-col justify-center bg-neutral-800 border-3 border-yellow-800 rounded-[17px] p-3">
              <p className="text-sm">{localStorage.getItem("email")}</p>
              <Button className="mt-2 bg-red-500 text-white" onClick={logout}>Logout</Button>
            </div>
          )}
        </div>

        <h1 className="text-4xl font-bold ">SEM NOTES</h1>
        <div className="flex flex-col items-center justify-center bg-neutral-800 border-3 border-yellow-800 rounded-[35px] m-9 p-6">
          <div className="grid grid-cols-2 gap-4 w-full">
            <Button className="moving-border-card p-8 w-full" onClick={sem1}>
              SEM 1
            </Button>
            <Button className="moving-border-card p-8 w-full" onClick={sem2}>
              SEM 2
            </Button>
            <Button className="moving-border-card p-8 w-full" onClick={sem3}>
              SEM 3 (!)
            </Button>
            <Button className="moving-border-card p-8 w-full" onClick={sem4}>
              SEM 4 (!)
            </Button>
            <Button className="moving-border-card p-8 w-full" onClick={sem5}>
              SEM 5 (!)
            </Button>
            <Button className="moving-border-card p-8 w-full" onClick={sem6}>
              SEM 6 (!)
            </Button>
            <Button className="moving-border-card p-8 w-full" onClick={sem7}>
              SEM 7 (!)
            </Button>
            <Button className="moving-border-card p-8 w-full" onClick={sem8}>
              SEM 8 (!)
            </Button>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mt-10">
          <h2 className="text-2xl font-bold m-0">Information</h2>
          <div className="flex flex-col items-center justify-center bg-neutral-800 border-3 border-yellow-800 w-87 rounded-[35px] m-6 p-5">
           <p style={{ textAlign: "justify" }}>
             These notes are sourced from official teachers in 2024, while the question papers have been collected from the library and seniors. Question papers can't be public, refer library for question papers. Semester 1 materials are applicable to the entire college. Semester 2 materials are specific to the AD department. Currently, only Semester 1 and Semester 2 resources are available, other Semesters will be added soon.
           </p>
           <p className="mt-4 text-yellow-400 font-semibold">
             Note: This website is unofficial.
           </p>
          </div>
          <div className="flex flex-col items-center justify-center bg-neutral-800 border-3 border-yellow-800 w-87 rounded-[35px] p-5">
            <p>
              The mobile app is in development (instead of the website on mobile phones).
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <Button className="moving-border-card mt-8 w-40 h-15" onClick={handleLike}>
            <ThumbsUp fill={userVote === "like" ? "currentColor" : "none"} />
          </Button>
          <Button className="moving-border-card mt-8 w-40 h-15" onClick={handleDislike}>
            <ThumbsDown fill={userVote === "dislike" ? "currentColor" : "none"} />
          </Button>
        </div>
        <div className="flex gap-0 mt-2">
        <p className="mr-15">Likes: {likes}</p>
        <p className="ml-15">Dislikes: {dislikes}</p>
      </div>

        <div className="flex flex-col mb-12 justify-center items-center mt-8">
          <h2 className="text-2xl font-bold m-3">Say Hi to the Developer</h2>
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
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/sem1" element={<Sem1 />}></Route>
        <Route path="/sem2" element={<Sem2 />}></Route>
        <Route path="/sem3" element={<Sem3 />}></Route>
        <Route path="/sem4" element={<Sem4 />}></Route>
        <Route path="/sem5" element={<Sem5 />}></Route>
        <Route path="/sem6" element={<Sem6 />}></Route>
        <Route path="/sem7" element={<Sem7 />}></Route>
        <Route path="/sem8" element={<Sem8 />}></Route>
      </Routes>
      <Analytics />
    </Router>
    
  )
}

export default App;