"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiBookOpen } from "react-icons/fi";

const Navbar = () => {
  const pathname = usePathname();

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "All Books", path: "/books" },
    { label: "My Profile", path: "/profile" },
  ];

  // ✅ Active checker function
  const isActive = (path) => pathname === path;

  return (
    <div className="bg-base-100 shadow-sm">
      <div className="navbar container mx-auto sticky top-0 z-50">
        {/* LEFT */}
        <div className="navbar-start">
          {/* Mobile Menu */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
            >
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className={`font-semibold text-black ${
                      isActive(link.path) ? "bg-[#643CDD] text-white" : ""
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
              <FiBookOpen className="w-5 h-5 bg-[#643CDD] text-white" />
            </div>
            <span className="font-serif text-xl font-bold hidden sm:block">
              BookNest
            </span>
          </Link>
        </div>

        {/* CENTER (Desktop Menu) */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-2 space-x-2">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  href={link.path}
                  className={`font-semibold text-black ${
                    isActive(link.path) ? "bg-[#643CDD] text-white" : ""
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT */}
        <div className="navbar-end">
          <button className="btn btn-primary">Button</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
