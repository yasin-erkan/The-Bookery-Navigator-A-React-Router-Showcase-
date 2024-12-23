import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Card from "../components/Card";
import Filter from "../components/Filter";

const Product = () => {
  const navigate = useNavigate();
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchParams] = useSearchParams(); // Get the search params from the URL

  useEffect(() => {
    // When the search or sort params change, re-fetch the books
    setLoading(true);
    const params = {
      q: searchParams.get("search"),
      _sort: "title",
      _order: searchParams.get("sort") === "z-a" ? "desc" : "asc",
    };

    axios
      .get("http://localhost:3000/books", { params })
      .then((res) => {
        setBooks(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching books:", err);
        setLoading(false);
        navigate("/notfound");
      });
  }, [searchParams]); // Re-run the effect when the search params change

  return (
    <div className="container my-5">
      {/* Display number of found books */}
      {books.length === 0 ? (
        <h3 className="bg-danger p-3 rounded fs-2 text-center">
          No books found with the search criteria!
        </h3>
      ) : (
        <h3>{books.length} books found</h3>
      )}

      {/* Filtering Section */}
      <Filter />

      {/* Books Section */}
      <div className="cards-container">
        {books.map((book) => (
          <Card key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Product;
