"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navlinks = () => {
  const pathname = usePathname();

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "All Books", path: "/books" },
    { label: "My Profile", path: "/profile" },
  ];

  const isActive = (path) => pathname === path;

  return (
    <>
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
    </>
  );
};

export default Navlinks;
