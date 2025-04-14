import { FaSearch ,FaGithub,FaSun} from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="flex items-center w-[100%]  h-[7vh]">
      <div className="flex-1/2 flex items-center ">
        <div className="mx-12 ">
          <h1 className="text-4xl font-bold text-slate-900">Zentrix-UI</h1>
        </div>

        <div className="">
          <ul className="flex items-center gap-8 ml-auto">
            <li className="group flex gap-1 items-center text-lg  text-slate-900 cursor-pointer">
              Components{" "}
              <svg
                className="transform transition-transform duration-500 group-hover:rotate-360"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 9l6 6 6-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </li>
            <li className="group flex gap-1 items-center text-lg  text-slate-900 cursor-pointer">
              Templates{" "}
              <svg
                className="transform transition-transform duration-500 group-hover:rotate-360"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 9l6 6 6-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </li>
            <li className="group flex gap-1 items-center text-lg  text-slate-900 cursor-pointer">
              Docs{" "}
              <svg
                className="transform transition-transform duration-500 group-hover:rotate-360"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 9l6 6 6-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex-1/2 flex items-center justify-end mr-12 ">
      <div className="relative flex items-center w-[250px] h-[40px] rounded-full border border-gray-300 bg-white shadow-sm">
          <FaSearch className="absolute left-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search Components"
            className="w-full h-full pl-12 pr-4 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-full"
          />
        </div>
        <div className="github-icon">
            <FaGithub className="text-slate-900 text-2xl ml-4 cursor-pointer" />
        </div>
        <div className="dark-mode-toggle">
        <FaSun className="text-slate-900 text-2xl ml-4 cursor-pointer" />
        </div>
        <button className="ml-4 bg-slate-900 text-white border-transparent p-1 rounded-md w-[5vw] hover:bg-white hover:border-slate-900 hover:text-slate-900 border-2 transition duration-300 ease-in-out cursor-pointer">
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Navbar;
