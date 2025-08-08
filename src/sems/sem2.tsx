import { Button } from "../components/ui/button";

function Sem2 () {
    return (
        <div>
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-4xl font-bold">SEM 2 NOTES</h1>
                <div className="flex flex-col items-center justify-center bg-gray-700 h-114 w-110 rounded-[35px] m-9">
                    <div className="flex">
                        <Button className="bg-gray-600 m-5 p-8 w-40 rounded-2xl">
                            PHYSICS
                        </Button>
                        <Button className="bg-gray-600 m-5 p-8 w-40 rounded-2xl">
                            CHEMISTRY
                        </Button>
                    </div>
                    <div className="flex">
                        <Button className="bg-gray-600 m-5 p-8 w-40 rounded-2xl">
                            MATHEMATICS
                        </Button>
                        <Button className="bg-gray-600 m-5 p-8 w-40 rounded-2xl">
                            ENGLISH
                        </Button>
                    </div>
                    <div className="flex">
                        <Button className="bg-gray-600 m-5 p-8 w-40 rounded-2xl">
                            PROGRAMMING
                        </Button>
                        <Button className="bg-gray-600 m-5 p-8 w-40 rounded-2xl">
                            ELECTRICAL
                        </Button>
                    </div>
                    <div className="flex">
                        <Button className="bg-gray-600 m-5 p-8 w-40 rounded-2xl">
                            ENVIRONMENTAL
                        </Button>
                        <Button className="bg-gray-600 m-5 p-8 w-40 rounded-2xl">
                            APTITUDE
                        </Button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Sem2