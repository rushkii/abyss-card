const Footer = () => {
    return (
        <div className="flex justify-center items-center font-lato w-[100%] space-x-5 bottom-0 mb-2">
            <div className="sm:text-xs md:text-sm 2lg:text-base">
                Made with
                <span className="text-red-600 sm:text-sm md:text-lg 2lg:text-xl"> ♥️</span> by
                <span className="sm:text-xs md:text-sm 2lg:text-base font-bold">
                    <a href="https://github.com/rushkii" className="text-sky-300"> Kiizuha</a>
                </span>
            </div>
            <div className="sm:text-xs md:text-sm 2lg:text-base">
                Powered by
                <span className="sm:text-xs md:text-sm 2lg:text-base font-bold">
                    <a href="https://api.enka.network/#/api" className="text-sky-300"> Enka.Network</a>
                </span>
            </div>
        </div>
    );
}

export default Footer;
