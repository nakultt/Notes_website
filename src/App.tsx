import { Button } from "./components/ui/button"

function App() {

  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold">SEM NOTES</h1>
        <div className="flex flex-col items-center justify-center bg-gray-700 h-113 w-80 rounded-[35px] m-8" >
          <div className="flex">
            <Button className=" bg-gray-600 m-5 rounded-2xl p-8">
              SEM 1
            </Button>
            <Button className=" bg-gray-600 m-5 rounded-2xl p-8" >
              SEM 2
            </Button>
          </div>
          <div className="flex">
            <Button className=" bg-gray-600 m-5 rounded-2xl p-8" >
              SEM 3
            </Button>
            <Button className=" bg-gray-600 m-5 rounded-2xl p-8" >
              SEM 4
            </Button>
          </div>
          <div className="flex">
            <Button className=" bg-gray-600 m-5 rounded-2xl p-8" >
              SEM 5
            </Button>
            <Button className=" bg-gray-600 m-5 rounded-2xl p-8" >
              SEM 6
            </Button>
          </div>
          <div className="flex">
            <Button className=" bg-gray-600 m-5 rounded-2xl p-8" >
              SEM 7
            </Button>
            <Button className=" bg-gray-600 m-5 rounded-2xl p-8" >
              SEM 8
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
