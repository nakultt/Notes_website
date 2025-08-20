import { Button } from "../components/ui/button";

function Sem2 () {

    const algebra = () => {
        window.open("https://drive.google.com/drive/u/1/folders/1OWNRG15VcpiuVeNdWdsqzwsEgp7a4lkh", "_blank");
    };
    const evs = () => {
        window.open("https://drive.google.com/drive/u/1/folders/1HJAnsMkhZ4YrQyr2eBo2iOQmqlVHsSN9", "_blank");
    };
    const materialscience = () => {
        window.open("https://drive.google.com/drive/u/1/folders/1B6CKR5MDhz4v1ZxCFB44TC5fiBW5ws0F", "_blank");
    };
    const python = () => {
        window.open("https://drive.google.com/drive/u/1/folders/1pilM68Tz2pOywQCrOFl8OHcRtUPcXegz", "_blank");
    };
    const de = () => {
        window.open("https://drive.google.com/drive/u/1/folders/1fhR5aVLdbMkDKLJIDooq95Y-pwJU_oyQ", "_blank");
    };
    const questions = () => {
        window.open("https://drive.google.com/drive/u/1/folders/1U3PGrPKGKrIOzZ7LCqw0gekrKpLbbWru", "_blank");
    };

    return (
        <div>
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-4xl font-bold m-3 mt-10">SEM 2 NOTES</h1>
                <div className="flex flex-col items-center justify-center bg-neutral-800 border-3 border-yellow-800 rounded-[35px] m-9 p-6">
                    <div className="flex flex-col md:grid md:grid-cols-2 gap-4 w-full">
                        <Button className="moving-border-card p-8 w-full" onClick={algebra}>
                            ALGEBRA
                        </Button>
                        <Button className="moving-border-card p-8 w-full" onClick={evs}>
                            EVS
                        </Button>
                        <Button className="moving-border-card p-8 w-full" onClick={materialscience}>
                            MATERIAL SCIENCE
                        </Button>
                        <Button className="moving-border-card p-8 w-full" onClick={python}>
                            PYTHON
                        </Button>
                        <Button className="moving-border-card p-8 w-full" onClick={de}>
                            DE
                        </Button>
                        <Button className="moving-border-card p-8 w-full" onClick={questions}>
                            QUESTIONS
                        </Button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Sem2