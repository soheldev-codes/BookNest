import BookDetails from "@/components/BookDetails/BookDetails";
import { getBooks } from "@/lib/book";

export default async function BookDeatilsPage({ params }) {
  const bookData = await getBooks();

  const { id } = await params;
  const book = bookData.find((b) => b.id === parseInt(id));

  if (!book) {
    return <div className="p-10 text-center">Book not found</div>;
  }

  return <BookDetails book={book} />;
}
