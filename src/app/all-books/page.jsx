"use client";

import { useState } from "react";
import Image from "next/image";
import { FaSearch, FaBook, FaArrowRight, FaLayerGroup } from "react-icons/fa";
import { bookData } from "@/lib/book";
import BookCard from "@/components/BookCard/BookCard";

const categories = ["All", "Story", "Tech", "Science"];

export default function BooksPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredBooks = bookData.filter((book) => {
    const categoryMatch =
      selectedCategory === "All" || book.category === selectedCategory;

    const searchMatch = book.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    return categoryMatch && searchMatch;
  });

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      {/* Heading */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold">All Books</h1>
        <p className="text-gray-500 mt-2">Browse our complete collection</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="space-y-6">
          {/* Search */}
          <div className="relative">
            <FaSearch className="absolute left-4 top-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search books by title..."
              className="input input-bordered w-full pl-10 rounded-xl"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Categories */}
          <div>
            <h2 className="font-semibold flex items-center gap-2 mb-4">
              <FaLayerGroup />
              Categories
            </h2>

            <div className="space-y-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`btn w-full justify-start rounded-xl ${
                    selectedCategory === category
                      ? "btn-primary text-white bg-[#643CDD]"
                      : "btn-ghost"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Books Section */}
        <div className="lg:col-span-3">
          <p className="text-sm text-gray-500 mb-5">
            {filteredBooks.length} books found
          </p>

          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredBooks.map((book, id) => (
              <BookCard book={book} key={id} />
            ))}
          </div>

          {filteredBooks.length === 0 && (
            <div className="text-center mt-10">
              <p className="text-gray-500">No books found</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
