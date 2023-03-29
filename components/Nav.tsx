import Link from "next/link";
import { useRouter } from "next/router";


const Nav = () => {
    const router = useRouter();
    let currentPath = router.pathname;

    return (
        <nav className="w-full backdrop-blur border-b-[0.1px] relative z-10 border-b-[#818186] dark:border-[#cbd5e152]
                        supports-backdrop-blur:bg-white/60">
            <div className="px-8 flex justify-between">
                <Link href="/" title="Abyss" className="h-16 flex items-center sm:text-3xl 2xl:text-4xl font-teyvat">
                    Abyss
                </Link>

                <ul className="flex border-sky-600">
                    <li className="h-auto">
                        <Link
                            href="/about"
                            title="About"
                            className={`h-16 flex items-center transition-all duration-200 hover:border-black
                            hover:dark:border-white border-b-2 border-transparent font-bold sm:text-xl lg:text-2xl
                            ${currentPath === "/about" ? "border-black dark:border-white" : ""}`}
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
