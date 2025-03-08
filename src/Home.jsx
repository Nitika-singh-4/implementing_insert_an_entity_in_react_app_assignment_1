import React from "react";
import { Link } from "react-router-dom";
import BookCard from "./components/BookCard";
import books from "./booksData";

const Home = () => {
  return (
    <div className="max-w-4xl mx-auto py-10 text-center">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Book Library</h1>

      {/* Add Book Button */}
      <Link
        to="/add-book"
        className="inline-block bg-blue-500 text-white px-5 py-2 rounded-lg shadow-md hover:bg-blue-600 transition"
      >
        Add Book
      </Link>

      {/* Book Grid */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Home;