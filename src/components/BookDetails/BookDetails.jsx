"use client";
import { FaBook } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { BsArrowLeft, BsClock } from "react-icons/bs";
import { BiBookOpen, BiUser } from "react-icons/bi";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

export default function BookDetails({ book }) {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Link
          href="/all-books"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
        >
          <BsArrowLeft className="w-4 h-4" /> Back to All Books
        </Link>

        <div className="grid md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl shadow-primary/10 bg-muted">
              <Image
                width={600}
                height={300}
                src={book.image_url}
                alt={book.title}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col"
          >
            <span className="bg-blue-300 w-fit px-4 py-1 rounded-4xl text-white">
              {book.category}
            </span>

            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mt-6 mb-2">
              {book.title}
            </h1>

            <div className="flex items-center gap-2 text-muted-foreground mb-4">
              <BiUser className="w-4 h-4" />
              <span className="text-sm">by {book.author}</span>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-4">
              {book.description || "No description available for this book."}
            </p>

            <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-xl mb-4">
              <BiBookOpen className="w-5 h-5 text-primary" />
              <div>
                <p className="text-sm font-medium text-foreground">
                  {book.available_quantity > 0
                    ? `${book.available_quantity} copies available`
                    : "Currently unavailable"}
                </p>
                <p className="text-xs text-muted-foreground">
                  14-day borrowing period
                </p>
              </div>
            </div>

            <button
              onClick={() => toast.success("Successfully Added")}
              className="flex items-center justify-center cursor-pointer  bg-[#643CDD] hover:bg-[#643CDD]/90 text-white py-2 rounded-xl gap-2 w-full transition sm:w-auto"
            >
              <FaBook /> Borrow This Book
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
