import Link from "next/link";
import { useRouter } from "next/router";

import styles from "@/styles/Nav.module.css";


const Nav = () => {
    const router = useRouter();
    let currentPath = router.pathname;

    return (
        <div className={`flex sm:justify-center md:justify-between items-center px-3 py-2 w-[100%] font-teyvat
                        border-b-[#cbd5e11a] backdrop-blur bg-slate-900 border-b-[0.1px] relative z-10`
        }>
            <Link href="/" title="Abyss" className="sm:text-2xl lg:text-3xl 2xl:text-4xl">Abyss</Link>
            <ul className="space-x-3 sm:hidden lg:flex text-xl">
                <li className={currentPath === "/about"? styles.boxNav : ""}>
                    <Link href="/about" title="About" className={currentPath === "/about"? styles.textNav : ""}>
                        About
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Nav;
