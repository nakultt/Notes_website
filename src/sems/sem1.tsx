import { Button } from "../components/ui/button";

function Sem1 () {
    const physics = () => {
        window.open("https://drive.google.com/drive/u/1/folders/12dsDSZfkai3YmIDeZ_6E7gEL2miO41IN", "_blank");
    };
    const chemistry = () => {
        window.open("https://drive.google.com/drive/u/1/folders/1fQblLzjx96Y0-4xQtsACrbC4QSNe88Rf", "_blank");
    };
    const beee = () => {
        window.open("https://drive.google.com/drive/u/1/folders/1iySe7A8dj1RckpQR0Jh9dku6Senos1gJ", "_blank");
    };
    const c = () => {
        window.open("https://drive.google.com/drive/u/1/folders/1zuUOSHGvoz6iVoyAlBsqPWUdtc-sb47K", "_blank");
    };
    const questions = () => {
        window.open("https://drive.google.com/drive/u/1/folders/1ba7UswpoKbuZC5mitW9w6O0U-Y0QYHLD", "_blank");
    };

    return (
        <div>
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-4xl font-bold m-3 mt-10">SEM 1 NOTES</h1>
                <div className="flex flex-col items-center justify-center bg-neutral-800 border-3 border-yellow-800 h-93 w-110 rounded-[35px] m-9">
                    <div className="flex">
                        <Button className="moving-border-card bg-gray-600 m-5 p-8 w-40 rounded-2xl" onClick={physics}>
                            PHYSICS
                        </Button>
                        <Button className="moving-border-card bg-gray-600 m-5 p-8 w-40 rounded-2xl" onClick={chemistry}>
                            CHEMISTRY
                        </Button>
                    </div>
                    <div className="flex">
                        <Button className="moving-border-card bg-gray-600 m-5 p-8 w-40 rounded-2xl" onClick={beee}>
                            BEEE
                        </Button>
                        <Button className="moving-border-card bg-gray-600 m-5 p-8 w-40 rounded-2xl" onClick={c}>
                            C
                        </Button>
                    </div>
                    <div className="flex">
                        <Button className="moving-border-card bg-gray-600 m-5 p-8 w-40 rounded-2xl" onClick={questions}>
                            QUESTIONS
                        </Button>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Sem1