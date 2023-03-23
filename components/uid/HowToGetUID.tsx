import Image from "next/image";
import { useState } from "react";

import example from "@/assets/images/how-to-get-UID.png";


const HowToGetUID = () => {
    const [tutor, setTutor] = useState(false);
    const displayTutor = () => {
        setTutor(!tutor)
    }

    return (
        <>
             <div className="font-light text-sm text-[#949494] underline cursor-help mt-3"
                onClick={displayTutor}>How to get it?</div>
            {tutor ?
                <div onClick={displayTutor} className="bg-[#090b18d2] fixed w-[100%] h-[100vh] py-2 flex justify-center items-center">
                    <Image src={example} alt="Tutor UID" width={1000}/>
                </div>
            : <></>}
        </>
    );
}

export default HowToGetUID;
