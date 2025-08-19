import { Button } from "../components/ui/button";

function Sem6 () {
    return (
        <div>
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-4xl font-bold m-3 mt-10">SEM 6 NOTES</h1>
                <div className="flex flex-col items-center justify-center bg-neutral-800 border-3 border-yellow-800 rounded-[35px] m-9 p-6">
                    <div className="flex flex-col md:grid md:grid-cols-2 gap-4 w-full">
                        <Button className="moving-border-card p-8 w-full">
                            PHYSICS
                        </Button>
                        <Button className="moving-border-card p-8 w-full">
                            CHEMISTRY
                        </Button>
                        <Button className="moving-border-card p-8 w-full">
                            MATHEMATICS
                        </Button>
                        <Button className="moving-border-card p-8 w-full">
                            ENGLISH
                        </Button>
                        <Button className="moving-border-card p-8 w-full">
                            PROGRAMMING
                        </Button>                        
                        <Button className="moving-border-card p-8 w-full">
                            ELECTRICAL
                        </Button>
                        <Button className="moving-border-card p-8 w-full">
                            ENVIRONMENTAL
                        </Button>
                        <Button className="moving-border-card p-8 w-full">
                            APTITUDE
                        </Button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Sem6
