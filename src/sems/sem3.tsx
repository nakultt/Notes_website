import { Button } from "../components/ui/button";

function Sem3 () {
    return (
        <div>
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-4xl font-bold">SEM 3 NOTES</h1>
                <div className="flex flex-col items-center justify-center bg-gray-700 h-113 w-100 rounded-[35px] m-8">
                    <div className="flex">
                        <Button className="bg-gray-600 m-5 p-8 rounded-2xl">
                            PHYSICS
                        </Button>
                        <Button className="bg-gray-600 m-5 py-8 px-5.5 rounded-2xl">
                            CHEMISTRY
                        </Button>
                    </div>
                    <div className="flex">
                        <Button className="bg-gray-600 m-5 p-8 rounded-2xl">
                            MATHEMATICS
                        </Button>
                        <Button className="bg-gray-600 m-5 p-8 rounded-2xl">
                            ENGLISH
                        </Button>
                    </div>
                    <div className="flex">
                        <Button className="bg-gray-600 m-5 p-8 rounded-2xl">
                            PROGRAMMING
                        </Button>
                        <Button className="bg-gray-600 m-5 p-8 rounded-2xl">
                            ELECTRICAL
                        </Button>
                    </div>
                    <div className="flex">
                        <Button className="bg-gray-600 m-5 p-8 rounded-2xl">
                            ENVIRONMENTAL
                        </Button>
                        <Button className="bg-gray-600 m-5 p-8 rounded-2xl">
                            APTITUDE
                        </Button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Sem3