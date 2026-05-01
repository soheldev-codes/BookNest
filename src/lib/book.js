export const getBooks = async () => {
  const res = await fetch("https://booknest-psi.vercel.app/booksdata.json");
  const data = await res.json();
  return data;
};

export const bookData = await getBooks();
