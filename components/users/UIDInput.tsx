import HowToGetUID from "./HowToGetUID";
import styles from "@/styles/UIDInput.module.css";


const UIDInput = () => {
    return (
        <>
            <div className={`sm:text-xl md:text-2xl 2lg:text-3xl 2xl:text-4xl text-center font-genshin`}>
                Please input your Genshin Impact UID in the box
            </div>
            <input className={`mt-3 h-10 text-center bg-[#0d0c1e] rounded-lg outline-none font-genshin
                            px-3 placeholder:font-normal border-2 border-[#2f2f5e71] sm:w-52`}
                placeholder="Enter your UID..."/>
            <HowToGetUID/>
        </>
    );
}

export default UIDInput;
