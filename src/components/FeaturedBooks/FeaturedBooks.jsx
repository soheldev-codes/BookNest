import { getBooks } from "@/lib/book";
import Image from "next/image";
import Link from "next/link";
import { FiBookOpen } from "react-icons/fi";

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
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Featured Books
            </h2>
          </div>

          <Link
            href="/books"
            className="text-primary text-sm flex items-center gap-1 hover:underline"
          >
            View All →
          </Link>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {books.map((book) => (
            <div
              key={book.id}
              className="bg-base-100 rounded-2xl overflow-hidden shadow hover:shadow-lg transition"
            >
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
                    href={`/books/${book.id}`}
                    className="text-primary  flex items-center rounded-2xl px-4 py-2 gap-1 hover:bg-[#643CDD] hover:text-white "
                  >
                    Details →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedBooks;
