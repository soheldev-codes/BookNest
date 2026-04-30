import { getBooks } from "@/lib/book";
import React from "react";
import Marquee from "react-fast-marquee";
import { BiStar } from "react-icons/bi";

const MarqueeText = async () => {
  const books = await getBooks();

  const items = [
    "New Arrivals",
    "The Great Gatsby",
    "Clean Code",
    "20% Off Science Books",
    "Cosmos by Carl Sagan",
    "JavaScript Mastery",
    "Sherlock Holmes Collection",
    "Free Shipping on 3+ Books",
  ];
  return (
    <div className="bg-[#643CDD] text-white py-2">
      <Marquee>
        {books.map((book, i) => (
          <span
            key={i}
            className="flex items-center gap-3 mx-6 text-sm font-medium"
          >
            <BiStar className="w-3.5 h-3.5 fill-current" />
            {book.title}
          </span>
        ))}
      </Marquee>
    </div>
  );
};

export default MarqueeText;
