import { FiBookOpen, FiLogIn, FiLogOut, FiUser } from "react-icons/fi";
import Navlinks from "./Navlinks";
import Link from "next/link";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";

const Navbar = async () => {
  const session = await auth.api.getSession({
    headers: await headers(), // you need to pass the headers object.
  });
  console.log(session.user, "test");
  const user = session.user;

  console.log(user, "users navbar");

  return (
    <div className="bg-base-100 shadow-sm sticky top-0 z-50">
      <div className="navbar container mx-auto ">
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
              <Navlinks />
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
            <Navlinks />
          </ul>
        </div>

        {/* RIGHT */}
        <div className="navbar-end">
          {user ? (
            <>
              <div className="badge badge-soft py-4 px-4 text-black font-semibold mr-2">
                <FiUser /> {user?.name}
              </div>
              <button className="btn ">
                <FiLogOut /> Logout
              </button>
            </>
          ) : (
            <button className="btn btn-primary">
              <FiLogIn /> Login
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
