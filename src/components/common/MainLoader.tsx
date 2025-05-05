
const MainLoader = () => {
    return (
        <div className="h-screen w-full flex items-center justify-center bg-gradient-to-br from-white via-gray-100 to-gray-300 dark:from-gray-900 dark:via-gray-800 dark:to-black transition-colors duration-500">
            <div className="flex flex-col items-center justify-center space-y-4">
                <div className="animate-logo-pulse">
                    <img
                        src="/NAV-LOGO.png"
                        alt="Happy Couple Solution"
                        className="w-52 sm:w-64 md:w-72 lg:w-80 drop-shadow-xl"
                    />
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-xl sm:text-base font-medium animate-dots">
                    Loading
                    <span className="inline-block w-1 h-1 bg-current rounded-full mx-[1px] animate-bounce delay-100"></span>
                    <span className="inline-block w-1 h-1 bg-current rounded-full mx-[1px] animate-bounce delay-300"></span>
                    <span className="inline-block w-1 h-1 bg-current rounded-full mx-[1px] animate-bounce delay-500"></span>
                </p>
            </div>
        </div>
    );
};

export default MainLoader;
