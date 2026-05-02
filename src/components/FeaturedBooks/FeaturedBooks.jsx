import { getBooks } from "@/lib/book";
import Image from "next/image";
import Link from "next/link";
import { FiBookOpen } from "react-icons/fi";
import BookCard from "../BookCard/BookCard";

const FeaturedBooks = async () => {
  const bookData = await getBooks();
  const books = bookData.slice(0, 4);

  return (
    <section className="py-16 bg-base-200">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <p className="text-sm text-primary font-medium tracking-wide uppercase">
              Curated for you
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 animate__animated animate__bounce">
              Featured Books
            </h2>
          </div>

          <Link
            href="/all-books"
            className="text-primary text-sm flex items-center gap-1 hover:underline"
          >
            View All →
          </Link>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {books.map((book, ind) => (
            <BookCard book={book} key={ind} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedBooks;
