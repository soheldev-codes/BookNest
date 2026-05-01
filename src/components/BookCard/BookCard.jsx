import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiBookOpen } from "react-icons/fi";

const BookCard = ({ book }) => {
  return (
    <div className="bg-base-100 rounded-2xl overflow-hidden shadow hover:shadow-lg transition">
      {/* Image */}
      <div className="relative">
        <Image
          src={book.image_url}
          alt={book.title}
          width={400}
          height={300}
          className="w-full h-56 object-cover"
        />

        {/* Category Badge */}
        <span
          className={`absolute top-3 left-3 text-xs px-2 py-1 rounded-full ${
            book.category === "Story"
              ? "bg-pink-100 text-pink-500"
              : book.category === "Tech"
                ? "bg-blue-100 text-blue-500"
                : "bg-green-100 text-green-500"
          }`}
        >
          {book.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-4 space-y-1">
        <h3 className="font-semibold text-base">{book.title}</h3>
        <p className="text-sm text-gray-500">by {book.author}</p>

        <div className="flex items-center justify-between mt-3 text-sm">
          <span className="text-gray-500 flex items-center gap-2">
            <FiBookOpen /> {book.available_quantity} available
          </span>

          <Link
            href={`/all-books/${book.id}`}
            className="text-primary  flex items-center rounded-2xl px-4 py-2 gap-1 hover:bg-[#643CDD] hover:text-white "
          >
            Details →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
