import Link from "next/link";
import React from "react";
import { FaBookOpen, FaTwitter, FaGithub } from "react-icons/fa";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 text-background mt-auto">
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-[#643CDD] rounded-lg flex items-center justify-center">
                <FaBookOpen className="w-5 h-5 text-white" />
              </div>
              <span className="font-serif text-xl font-bold">BookNest</span>
            </div>

            <p className=" text-sm leading-relaxed">
              Discover, borrow, and immerse yourself in a world of books. Your
              next great read is just a click away.
            </p>

            {/* Social */}
            <div className="flex gap-3 mt-5">
              <Link
                href="#"
                className="w-9 h-9 rounded-full bg-sky-100  hover:bg-[#643CDD] hover:text-white  flex items-center justify-center transition-all"
              >
                <FaTwitter className="w-4 h-4" />
              </Link>

              <Link
                href="#"
                className="w-9 h-9 rounded-full bg-sky-100 hover:bg-[#643CDD] hover:text-white flex items-center justify-center transition-all"
              >
                <FaGithub className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4 text-background/80">
              Quick Links
            </h3>

            <div className="space-y-2.5">
              {[
                { label: "Home", path: "/" },
                { label: "All Books", path: "/all-books" },
                { label: "My Profile", path: "/profile" },
              ].map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className="block text-sm text-background/60 hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4 text-background/80">
              Contact Us
            </h3>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-background/60">
                <FiMail className="w-4 h-4 text-primary shrink-0" />
                <span>hello@booknest.com</span>
              </div>

              <div className="flex items-center gap-3 text-sm text-background/60">
                <FiPhone className="w-4 h-4 text-primary shrink-0" />
                <span>+1 (555) 123-4567</span>
              </div>

              <div className="flex items-center gap-3 text-sm text-background/60">
                <FiMapPin className="w-4 h-4 text-primary shrink-0" />
                <span>123 Library Lane, Bookville</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-6 border-t  text-center">
          <p className="text-sm ">
            © {new Date().getFullYear()} BookNest. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
