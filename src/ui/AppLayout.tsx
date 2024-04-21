import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

import { HiChevronDoubleLeft } from "react-icons/hi2";

import { motion } from "framer-motion";
import { MdHome } from "react-icons/md";
import { FaSearchengin } from "react-icons/fa";
export default function AppLayout() {
  const [sideMenuOpen, setSideMenuOpen] = useState(false);
  const [user, setUser] = useState();
  function toggleOpen() {
    setSideMenuOpen((o) => !o);
  }
  return (
    <div className="w-screen h-screen flex items-start justify-start overflow-hidden bg-primary">
      <div
        className={` ${
          sideMenuOpen ? "w-2" : "flex-[.2]"
        } min-h-screen max-h-screen relative bg-secondary px-3 py-6 flex flex-col items-center justify-start gap-4 transition-all duration-200 ease-in-out `}
      >
        <motion.div
          whileTap={{ scale: 0.9 }}
          className="w-8 h-8 bg-secondary rounded-tr-lg rounded-br-lg absolute -right-8 flex items-center justify-center cursor-pointer"
          onClick={toggleOpen}
        >
          <HiChevronDoubleLeft className="text-white text-xl" />
        </motion.div>
        <div className="overflow-hidden w-full flex flex-col gap-4">
          <Link to="/">
            <img
              src="/codepen-wordmark-white.webp"
              alt="logo"
              className="object-contain m-auto w-72 h-auto"
            />
          </Link>

          <Link to="/newProject">
            <div className="px-6 py-3 flex items-center justify-center rounded-xl border border-gray-400 cursor-pointer group hover:border-gray-200">
              <p className="text-gray-400 group-hover:text-gray-200 capitalize">
                Start Coding!
              </p>
            </div>
          </Link>

          {user && (
            <Link
              to="/projects"
              className="flex items-center justify-center gap-6"
            >
              <MdHome className="text-primaryText text-xl" />
              <p className="text-lg text-primaryText">Home</p>
            </Link>
          )}
        </div>
      </div>

      <div className="flex-1 min-h-screen max-h-screen overflow-y-auto h-full flex flex-col items-start justify-start px-4 md:px-12 py-4 md:py-12 ">
        <header className="w-full flex items-center justify-between gap-3">
          <div className="bg-secondary w-full px-4 py-3 rounded-md flex items-center justify-center gap-3">
            <FaSearchengin className="text-2xl text-primaryText" />
            <input
              type="text"
              className="flex-1 px-4 py-1 text-xl bg-transparent outline-none border-none text-primaryText placeholder:texy-gray-600"
              placeholder="search here..."
            />
          </div>
          {!user && (
            <motion.div
              whileTap={{ scale: 0.9 }}
              className="flex items-center justify-center gap-3"
            >
              <Link
                to="/signup"
                className="bg-emerald-500  px-6 py-2 rounded-md text-white cursor-pointer hover:bg-emerald-700"
              >
                Signup
              </Link>
            </motion.div>
          )}
          {user && <div></div>}
        </header>
        <main className="w-full">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
