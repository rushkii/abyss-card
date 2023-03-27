import Image from "next/image";
import { useState } from "react";

import example from "@/assets/images/how-to-get-UID.png";


const HowToGetUID = () => {
    const [tutor, setTutor] = useState(false);
    const displayTutor = () => {
        setTutor(!tutor);
    }

    return (
        <>
             <div className="font-light text-sm text-[#949494] underline cursor-help mt-3"
                onClick={displayTutor}>How to get it?</div>
            {tutor ?
                <div className={`${tutor ? "block": "hidden"} z-[999]`}>
                    <div className="fixed left-0 top-0 w-full h-full bg-[#000000b0] backdrop-blur-sm flex justify-center items-center"
                        onClick={displayTutor}
                    >
                        <Image src={example} alt="Tutor UID" width={1000} className="block w-[80%] max-w-[800px]"/>
                    </div>
                </div>
            : <></>}
        </>
    );
}

export default HowToGetUID;
