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
    const ccodes = () => {
        window.open("https://drive.google.com/drive/folders/1mSoeyquA-7L9a7I2Eap7bBDOogD_K3jL", "_blank");
    };
    const mathscodes = () => {
        window.open("https://drive.google.com/drive/folders/1YjLbb94eDC3cw-CyDYq3Q_XtRBiwg2r2", "_blank");
    };

    return (
        <div>
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-4xl font-bold m-3 mt-10">SEM 1 NOTES</h1>
                <div className="flex flex-col items-center justify-center bg-neutral-800 border-3 border-yellow-800 rounded-[35px] m-9 p-6">
                    <div className="flex flex-col md:grid md:grid-cols-2 gap-4 w-full">
                        <Button className="moving-border-card p-8 w-full" onClick={physics}>
                            PHYSICS
                        </Button>
                        <Button className="moving-border-card p-8 w-full" onClick={chemistry}>
                            CHEMISTRY
                        </Button>
                        <Button className="moving-border-card p-8 w-full" onClick={beee}>
                            BEEE
                        </Button>
                        <Button className="moving-border-card p-8 w-full" onClick={c}>
                            C
                        </Button>
                        <Button className="moving-border-card p-8 w-full" onClick={ccodes}>
                            C Programming Codes
                        </Button>
                        <Button className="moving-border-card p-8 w-full" onClick={mathscodes}>
                            Maths MATLAB Codes
                        </Button>
                        <Button className="moving-border-card p-8 w-full md:col-span-2" onClick={questions}>
                            QUESTION BANK
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sem1