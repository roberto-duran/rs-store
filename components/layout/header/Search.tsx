import { HiMagnifyingGlass } from "react-icons/hi2";

export default function Search() {
    return (
        <form>
            <div className="flex">
                <div className="relative w-full">
                    <input type="search" id="search-dropdown"
                           className="block p-2.5 w-full z-20 text-sm
                           text-gray-900 bg-gray-50 rounded-lg
                           border border-gray-300 focus:ring-blue-500
                           focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700
                           dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                           dark:focus:border-blue-500"
                           placeholder="Search Products..." />
                        <button type="submit"
                                className="absolute top-0 right-0 p-2.5
                                text-sm font-medium text-white bg-blue-700
                                rounded-r-lg border border-blue-700
                                hover:bg-blue-800 focus:ring-4 focus:outline-none
                                focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700
                                dark:focus:ring-blue-800">
                            <HiMagnifyingGlass className="w-5 h-5" aria-hidden="true"/>
                            <span className="sr-only">Search</span>
                        </button>
                </div>
            </div>
        </form>
    );
};
