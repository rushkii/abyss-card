const Footer = () => {
    return (
        <div className="flex justify-center items-center font-lato w-[100%] relative">
            <div className="flex mb-2 space-x-5 font-bold sm:text-white lg:text-black dark:lg:text-white">
                <div className="sm:text-xs md:text-sm 2lg:text-base">
                    Made with
                    <span className="text-red-600"> ♥️</span> by
                    <span className="sm:text-xs md:text-sm 2lg:text-base">
                        <a href="https://github.com/rushkii" className="sm:text-sky-300 lg:text-sky-100 dark:lg:text-sky-300"> Kiizuha</a>
                    </span>
                </div>
                <div className="sm:text-xs md:text-sm 2lg:text-base">
                    Powered by
                    <span className="sm:text-xs md:text-sm 2lg:text-base">
                        <a href="https://api.enka.network/#/api" className="sm:text-sky-300 lg:text-sky-100 dark:lg:text-sky-300"> Enka.Network</a>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Footer;
