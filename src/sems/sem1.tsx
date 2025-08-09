import { Button } from "../components/ui/button";

function Sem1 () {
    const physics = () => {
        window.location.href = "https://drive.google.com";
    };
    const chemistry = () => {
        window.location.href = "https://drive.google.com";
    };

    return (
        <div>
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-4xl font-bold m-3">SEM 1 NOTES</h1>
                <div className="flex flex-col items-center justify-center bg-gray-700 h-114 w-110 rounded-[35px] m-9">
                    <div className="flex">
                        <Button className="moving-border-card bg-gray-600 m-5 p-8 w-40 rounded-2xl" onClick={physics}>
                            PHYSICS
                        </Button>
                        <Button className="moving-border-card bg-gray-600 m-5 p-8 w-40 rounded-2xl" onClick={chemistry}>
                            CHEMISTRY
                        </Button>
                    </div>
                    <div className="flex">
                        <Button className="moving-border-card bg-gray-600 m-5 p-8 w-40 rounded-2xl">
                            MATHEMATICS
                        </Button>
                        <Button className="moving-border-card bg-gray-600 m-5 p-8 w-40 rounded-2xl">
                            ENGLISH
                        </Button>
                    </div>
                    <div className="flex">
                        <Button className="moving-border-card bg-gray-600 m-5 p-8 w-40 rounded-2xl">
                            PROGRAMMING
                        </Button>
                        <Button className="moving-border-card bg-gray-600 m-5 p-8 w-40 rounded-2xl">
                            ELECTRICAL
                        </Button>
                    </div>
                    <div className="flex">
                        <Button className="moving-border-card bg-gray-600 m-5 p-8 w-40 rounded-2xl">
                            ENVIRONMENTAL
                        </Button>
                        <Button className="moving-border-card bg-gray-600 m-5 p-8 w-40 rounded-2xl">
                            APTITUDE
                        </Button>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Sem1