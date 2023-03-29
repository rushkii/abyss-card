import { useRouter } from "next/router";
import { FormEvent, useState, ChangeEvent } from "react";

import HowToGetUID from "./HowToGetUID";
import styles from "@/styles/UIDInput.module.css";
import { MdArrowForwardIos, MdOutlineClose } from "react-icons/md";
import { serverID } from "@/data/server";
import { useEffect } from "react";


const UIDInput = () => {
    const [uidInput, setUidInput] = useState("");
    const [borderColor, setBorderColor] = useState("border-[#4e4e8370]");
    const [iconColor, setIconColor] = useState("#4e4e8370");
    const [boxShadowInput, setBoxShadowInput] = useState(styles.inputBoxShadowDefault)
    const [boxShadowIcon, setBoxShadowIcon] = useState(styles.iconButtonBoxShadowDefault)
    const [warnText, setWarnText] = useState("");
    const [isValid, setIsValid] = useState(false);
    const router = useRouter();

    const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        let allowedValue = /^[0-9\b]+$/;

        if(e.target.value === "") {
            setUidInput(e.target.value);
            setBorderColor("border-[#4e4e8370]");
            setIconColor("#4e4e8370");
            setBoxShadowInput(styles.inputBoxShadowDefault)
            setBoxShadowIcon(styles.iconButtonBoxShadowDefault)
            setWarnText("");
            setIsValid(false);
        }

        if(e.target.value.match(allowedValue)) {
            if(e.target.value.length >= 9) {
                setBorderColor("border-[#16ff1671]");
                setIconColor("#16ff1671");
                setBoxShadowInput(styles.inputBoxShadowSuccess)
                setBoxShadowIcon(styles.iconButtonBoxShadowSuccess)
                setIsValid(true);
            } else {
                setBorderColor("border-[#4e4e8370]");
                setBoxShadowInput(styles.inputBoxShadowDefault)
                setBoxShadowIcon(styles.iconButtonBoxShadowDefault)
                setIconColor("#4e4e8370");
                setIsValid(false);
            }

            if(!(Object.keys(serverID).includes(e.target.value.charAt(0)))) {
                setBorderColor("border-[#ff161671]");
                setIconColor("#ff161671");
                setBoxShadowInput(styles.inputBoxShadowFail)
                setBoxShadowIcon(styles.iconButtonBoxShadowFail)
                setIsValid(false);
                setWarnText(`Invalid UID! There is no UID startswith ${e.target.value.charAt(0)}`);
            } else {
                setWarnText("");
            }

            if(e.target.value.length >= 10) {
                setUidInput(uidInput);
            } else {
                setUidInput(e.target.value);
            }
        }
    }

    const onSubmitInput = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        if(isValid) {
            router.push(`/uid/${uidInput}`);
        }
    }

    const onClick = (e: FormEvent<HTMLButtonElement>): void => {
        e.preventDefault();
        if(isValid) {
            router.push(`/uid/${uidInput}`);
        } else {
            setUidInput("");
        }
    }

    useEffect(() => {
        const UID = localStorage.getItem("UID");
        if(UID !== null) setUidInput(UID);
    }, [])

    useEffect(() => {
        localStorage.setItem("UID", uidInput);
    }, [uidInput]);


    return (
        <div className="flex flex-col justify-center items-center">
            <div className="font-genshin transition-colors ease-in-out delay-75">

                <div className={`sm:text-xl md:text-2xl 2lg:text-3xl 2xl:text-4xl text-center`}>
                    Please input your Genshin Impact UID in the box
                </div>

                <div className="flex flex-col justify-center items-center pt-7">
                    <div className={`bg-[#ffffff3b] backdrop-blur-md dark:backdrop-blur-none
                                    dark:bg-[#070711] flex rounded-md border-2 transition ease-in-out
                                    duration-150 ${borderColor} ${boxShadowInput}`}>
                        <form onSubmit={onSubmitInput} className="flex justify-center items-center">
                            <input className="bg-transparent outline-none border-none w-[10em] text-center px-3
                                            placeholder:text-sm placeholder:text-slate-600 placeholder:dark:text-white"
                                placeholder="Input your UID..."
                                type="tel"
                                value={uidInput}
                                onChange={onChangeInput}
                            />
                        </form>

                        {uidInput !== ""?
                            <button className={`transition ease-in duration-150 py-2 pr-2 disabled:cursor-not-allowed
                            ${uidInput.length >= 9 ? " " : "-translate-x-2"}`}
                                disabled={uidInput === ""}
                                onClick={onClick}>
                                { !isValid? <MdOutlineClose className={`text-2xl ${boxShadowIcon}`} color={iconColor}/>
                                : <MdArrowForwardIos className={`text-2xl ${boxShadowIcon}`} color={iconColor}/> }
                            </button>:
                            <div className={`transition ease-in duration-150 py-2 pr-2 disabled:cursor-not-allowed
                            ${uidInput.length >= 9 ? " " : "-translate-x-2"}`}>&nbsp;</div>
                        }
                    </div>
                    {<label className="font-bold text-red-700 dark:text-red-500 font-lato mt-2">{warnText}</label>}
                </div>

            </div>
            <HowToGetUID/>
        </div>
    );
}

export default UIDInput;
