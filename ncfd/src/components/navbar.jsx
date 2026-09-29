import React from "react";
import { Link } from "react-router-dom";
import { LuArrowUpDown } from "react-icons/lu";

function Navbar() {
  return (
    <>
      <div className="fixed left-0 top-0 h-screen w-12 bg-[#00ff5f] flex items-end justify-center z-50 group">
        <Link
          to="/traders"
          className="[writing-mode:vertical-rl] rotate-180 text-black font-bold text-2xl mb-8 group-hover:-translate-y-4 transition duration-300 ease-in-out flex items-center gap-2"
        >
          <LuArrowUpDown className="rotate-180" />
          Traders
        </Link>
      </div>

      <div className="fixed right-0 top-0 h-screen flex z-50">
        <Link
          to="/partners"
          className="w-12 bg-[#33c46d] flex items-end justify-center group"
        >
          <span className="[writing-mode:vertical-rl] rotate-180 text-black font-bold text-xl mb-8 group-hover:-translate-y-4 transition duration-300 ease-in-out flex items-center gap-2">
            <LuArrowUpDown className="rotate-180" />
            Partners
          </span>
        </Link>

        <Link
          to="/challenges"
          className="w-12 bg-[#1f7a3d] flex items-end justify-center group"
        >
          <span className="[writing-mode:vertical-rl] rotate-180 text-white font-bold text-xl mb-8 group-hover:-translate-y-4 transition duration-300 ease-in-out flex items-center gap-2">
            <LuArrowUpDown className="rotate-180" />
            Challenges
          </span>
        </Link>

        <Link
          to="/embedded"
          className="w-12 bg-[#104d28] flex items-end justify-center group"
        >
          <span className="[writing-mode:vertical-rl] rotate-180 text-white font-bold text-xl mb-8 group-hover:-translate-y-4 transition duration-300 ease-in-out flex items-center gap-2">
            <LuArrowUpDown className="rotate-180" />
            Embedded
          </span>
        </Link>

        <Link
          to="/careers"
          className="w-12 bg-black flex items-end justify-center group"
        >
          <span className="[writing-mode:vertical-rl] rotate-180 text-white font-bold text-xl mb-8 group-hover:-translate-y-4 transition duration-300 ease-in-out flex items-center gap-2">
            <LuArrowUpDown className="rotate-180" />
            Careers
          </span>
        </Link>
      </div>

      <nav className="ml-12 mr-48 bg-white shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center h-20 px-8">
          <h1 className="text-4xl font-bold text-green-500">
            TradePro
          </h1>

          <div className="flex items-center gap-6">
            <button className="px-5 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition">
              Login
            </button>

            <button className="px-6 py-2 rounded-lg bg-violet-600 text-white hover:bg-violet-700 transition">
              Trade Now
            </button>

            <button className="text-3xl hover:text-violet-600 transition">
              ☰
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;