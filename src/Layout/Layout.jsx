import { Outlet, Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { FaSearch, FaChevronDown } from "react-icons/fa";
import { useState } from "react";

const Layout = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const components = [
    { name: "Alerts", count: 1 },
    { name: "Buttons", count: 6 },
    { name: "Buttons-groups", count: 2 },
    { name: "Breadcrumbs", count: 2 },
    { name: "Clipboards", count: 1 },
    { name: "Dropdowns", count: 1 },
    { name: "Date-pickers", count: 1 },
    { name: "Inputs", count: 1 },
    { name: "Loaders", count: 1 },
    { name: "Menus", count: 2 },
    { name: "Paginations", count: 2 },
    { name: "Progress-bars", count: 1 },
    { name: "Skeletons", count: 2 },
    { name: "Sticky-bars", count: 1 },
    { name: "Tabs", count: 2 },
  ];

  // Filter components based on search term
  const filteredComponents = components.filter((component) =>
    component.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col h-screen">
      {/* Navbar */}
      <div className="w-full">
        <Navbar />
      </div>

      {/* Main Content */}
      <div className="flex h-full">
        {/* Sidebar */}
        <div className="w-[20%] bg-gray-100 pt-[7vh] overflow-y-auto border-r border-gray-300">
          {/* Search Bar */}
          <div className="relative flex items-center mx-auto w-[90%] h-[40px] rounded-full border border-gray-300 bg-white shadow-sm mt-4">
            <FaSearch className="absolute left-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search Components"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full h-full text-sm pl-12 pr-4 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-full"
            />
          </div>

          {/* Components List */}
          <div className="p-4">
            <div
              className="flex items-center justify-between cursor-pointer text-gray-700 font-semibold"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              <span>Components</span>
              <FaChevronDown
                className={`transition-transform ${
                  isExpanded ? "rotate-0" : "-rotate-90"
                }`}
              />
            </div>
            {isExpanded && (
              <ul className="mt-4 space-y-2">
                {filteredComponents.map((component) => (
                  <li key={component.name}>
                    <Link
                      to={`/components/${component.name.toLowerCase()}`}
                      className="flex justify-between items-center p-2 text-gray-700 hover:bg-gray-200 rounded"
                    >
                      <span>{component.name}</span>
                      <span className="text-sm text-gray-500">
                        {component.count}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Right-Side Content */}
        <div className="w-[80%] pt-[7vh] overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;