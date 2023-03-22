import Link from "next/link";
import { useRouter } from "next/router";


const Nav = () => {
    const router = useRouter();
    let currentPath = router.pathname;

    return (
        <nav className="w-full backdrop-blur border-b-[0.1px] relative z-10 border-b-[#bcc4cf] dark:border-[#cbd5e11a]
                        supports-backdrop-blur:bg-white/60">
            <div className="px-8 flex sm:justify-center md:justify-between">
                <Link href="/" title="Abyss" className="sm:text-2xl h-16 flex items-center lg:text-3xl 2xl:text-4xl font-teyvat">
                    Abyss
                </Link>

                <ul className="sm:hidden lg:flex border-sky-600">
                    <li className="h-auto">
                        <Link
                            href="/about"
                            title="About"
                            className={`h-16 flex items-center transition-all duration-200 hover:border-white border-b-2
                            border-transparent font-bold text-2xl
                            ${currentPath === "/about" ? "border-white" : ""}`}
                        >
                            <div>About</div>
                            <div className="absolute w-full h-[1px] border-b-6 bottom-0 border-gray-900"></div>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;
