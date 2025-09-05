
import { Link } from "react-router-dom";

function Tab({ open }) {
  return (
    <>
      <div
        className={`
    fixed top-14 left-0 w-64 h-[calc(100%-3.5rem)] shadow-lg bg-amber-100
    transition-transform duration-300 z-40
    ${open ? "translate-x-0" : "-translate-x-full"} 
    xl:translate-x-0 xl:static xl:block
  `}
      >
        {/* Profile Section */}
        <div className="profile h-40 border-b-2 border-gray-700 flex items-center gap-4 p-4">
          <img
            className="h-20 w-20 rounded-full"
            src="https://www.svgrepo.com/show/514283/user.svg"
            alt="Profile"
          />
          <div className="Status font-bold">
            <ul>
              <li>Name: Rohit Mathur</li>
              <li>Status: Online</li>
            </ul>
          </div>
        </div>

        {/* Table of Contents */}
        <div className="tab border-b-2 h-120 border-gray-700 p-4">
          <div className="font-semibold underline mb-2">Table of contents</div>
          <ul className="space-y-2">
            <li className="before:content-['➜'] before:mr-2">
              <Link to="/international">International News</Link>
            </li>
            <li className="before:content-['➜'] before:mr-2">
              <Link to="/national">National News</Link>
            </li>
            <li className="before:content-['➜'] before:mr-2">
              <Link to="/games">Games</Link>
            </li>
            <li className="before:content-['➜'] before:mr-2">
              <Link to="/business">Business</Link>
            </li>
            <li className="before:content-['➜'] before:mr-2">
              <Link to="/custom">Custom Articles</Link>
            </li>
          </ul>
        </div>

        {/* Footer */}
        <div className="fotter p-4 border-t border-gray-700 ">
          <p className="text-sm text-gray-700">Legal</p>
        </div>
      </div>
    </>
  );
}

export default Tab;
